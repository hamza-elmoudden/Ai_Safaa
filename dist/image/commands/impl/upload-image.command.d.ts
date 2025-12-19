export declare class UploadImageCommand {
    readonly filename: string;
    readonly buffer: Buffer;
    readonly mimetype: string;
    constructor(filename: string, buffer: Buffer, mimetype: string);
}
