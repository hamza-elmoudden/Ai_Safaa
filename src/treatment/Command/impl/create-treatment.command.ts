import { concern_type ,plan_status,areas_treated} from "../../Schema/treatment.schema";




export class CreateTreatmentCommand {
    constructor(
        public user_id: string,
        public title: string,
        public concern_type: concern_type,
        public status: plan_status,
        public areas_treated: areas_treated,
    ) { }
}