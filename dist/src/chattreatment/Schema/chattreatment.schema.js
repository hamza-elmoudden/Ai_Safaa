"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatTreatment = void 0;
class ChatTreatment {
    id;
    plan_id;
    user_message;
    ai_response;
    have_photo;
    day_number;
    image_url;
    image_key;
    constructor(id, plan_id, user_message, ai_response, have_photo, day_number, image_url, image_key) {
        this.id = id;
        this.plan_id = plan_id;
        this.user_message = user_message;
        this.ai_response = ai_response;
        this.have_photo = have_photo;
        this.day_number = day_number;
        this.image_url = image_url;
        this.image_key = image_key;
    }
}
exports.ChatTreatment = ChatTreatment;
//# sourceMappingURL=chattreatment.schema.js.map