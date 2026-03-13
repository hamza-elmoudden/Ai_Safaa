
export class CreateTreatmentCommand {
    constructor(
        public id: string,
        public user_id: string,
        public title: string,
    ){}
}