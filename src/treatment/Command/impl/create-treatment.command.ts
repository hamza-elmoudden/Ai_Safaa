import { areas_treated} from "../../Schema/treatment.schema";


export class CreateTreatmentCommand {
    constructor(
        public user_id: string,
        public areas_treated: areas_treated
    ) {}
}