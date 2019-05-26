"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("../modules/log");
function ResRedirect(res, redirect) {
    const { location, code, reasonPhrase } = redirect;
    log_1.LOG({ type: 'REDIRECT', msg: location });
    res.setHeader('Location', location);
    res.writeHead(code, reasonPhrase);
    res.end();
}
exports.default = ResRedirect;
/**
 * 301永久
 * 302临时性
 */ 
//# sourceMappingURL=ResRedirect.js.map