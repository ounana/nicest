import { ServerResponse } from 'http';
import { API_PREFIX } from '../configure';
import CONTROLLER from '../controller';
import { Controller, isMethod } from '../Interface/Controller';
import { Middleware } from '../Interface/Middleware';
import { Req } from '../Interface/Req';
import { DEBUG } from '../modules/logger';

export const CheckController: Middleware = function (
  req: Req, res: ServerResponse, next: () => void
): void {
  const { method, __relativePath, __absolutePath, __startTime } = req
  if (!method || !__relativePath) return next()
  if (!isMethod(method)) return next()

  const prefix: RegExpMatchArray | null = __relativePath.match(new RegExp('^' + API_PREFIX + '/'))
  if (!prefix) return next()

  const controller: Controller | undefined = CONTROLLER.find(
    c => {
      const def: boolean = c.PATH_NAME === __relativePath
      const m0: RegExpMatchArray | null = c.PATH_NAME.match(/^([^\*]+)\/\*$/)
      if (!m0) return def
      const m1: RegExpMatchArray | null = __relativePath.match(new RegExp('^' + m0[1] + '.+$'))
      return m1 ? true : def
    }
  )
  if (!controller) return next()
  let handle = controller[method]
  if (!handle) return next()
  handle = handle.bind(controller)
  handle(req, res)
  // handle.call(controller, req, res)
  // handle.apply(controller, [req, res])
  DEBUG({
    type: 'CONTROLLER',
    msg: __absolutePath! + ' +' + (Date.now() - __startTime!) + 'ms'
  })
}