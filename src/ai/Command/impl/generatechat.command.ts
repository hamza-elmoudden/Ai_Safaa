



export class generatetextcommand {
    constructor(
        public text: string,
        public readonly user_id?: string,
        public file?: Express.Multer.File,  
    ) {}
}