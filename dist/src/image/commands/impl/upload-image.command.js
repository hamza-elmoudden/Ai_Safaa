"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadImageCommand = void 0;
class UploadImageCommand {
    filename;
    buffer;
    mimetype;
    constructor(filename, buffer, mimetype) {
        this.filename = filename;
        this.buffer = buffer;
        this.mimetype = mimetype;
    }
}
exports.UploadImageCommand = UploadImageCommand;
//# sourceMappingURL=upload-image.command.js.map