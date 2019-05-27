"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const path_2 = require("../utils/path");
let STREAM = null;
function CREATE_STREAM() {
    if (STREAM) {
        STREAM.close();
    }
    const CURRENT_DAY = new Date().toLocaleDateString();
    const FILE_NAME = path_1.join(path_2.LOG_PATH, `/${CURRENT_DAY}.log`);
    STREAM = fs_1.createWriteStream(FILE_NAME, {
        flags: 'a',
        encoding: 'utf8'
    });
}
CREATE_STREAM();
function WRITE(MSG) {
    STREAM.write(MSG);
    STREAM.write('\r\n');
}
WRITE('DWQDQ');
WRITE('SFSDF');
module.exports = {
    CREATE_STREAM,
    STREAM,
    WRITE,
};
//# sourceMappingURL=write.js.map