"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreatmentAiCommand = void 0;
class TreatmentAiCommand {
    user_id;
    treatment_id;
    user_message;
    user_image;
    limit;
    page;
    constructor(user_id, treatment_id, user_message, user_image, limit, page) {
        this.user_id = user_id;
        this.treatment_id = treatment_id;
        this.user_message = user_message;
        this.user_image = user_image;
        this.limit = limit;
        this.page = page;
    }
}
exports.TreatmentAiCommand = TreatmentAiCommand;
//# sourceMappingURL=treatmentai.command.js.map