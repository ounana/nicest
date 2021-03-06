import { ServerResponse } from 'http';
import { Req } from '../Interface/Req';
import { DEBUG } from '../modules/logger';

export function ResNotFound(req: Req, res: ServerResponse): void {
  const { __absolutePath, __relativePath, __startTime } = req
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.writeHead(404, 'Not Found')
  res.end(`
  	<h1>Not Found</h1>
  	<p>The requested URL ${__relativePath} was not found on this server.</p>
  `)
  DEBUG({ 
    type: 'RES_404', 
    msg: __absolutePath! + ' +' + (Date.now() - __startTime!) + 'ms'
  })
}
