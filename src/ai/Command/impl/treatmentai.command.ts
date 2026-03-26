

export class TreatmentAiCommand {
    constructor(
        public readonly user_id: string,
        public readonly treatment_id: string,
        public readonly user_message: string,
        public readonly user_image: any,
        public limit?: number,
        public page?: number
    ) { }
}