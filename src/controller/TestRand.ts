import { ServerResponse } from "http";
import { Controller } from "../Interface/Controller";
import { Req } from "../Interface/Req";

export class TestRand implements Controller {
  readonly PATH_NAME: string = '/api/rand/*'
  GET(req: Req, res: ServerResponse): void {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
    const { __query } = req
    res.end(JSON.stringify(__query))
  }
}