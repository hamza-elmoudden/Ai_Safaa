import { areas_treated } from "../../Schema/treatment.schema";
export declare class CreateTreatmentCommand {
    user_id: string;
    areas_treated: areas_treated;
    constructor(user_id: string, areas_treated: areas_treated);
}
