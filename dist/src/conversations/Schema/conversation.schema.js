"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conversation = void 0;
class Conversation {
    id;
    user_id;
    message_user;
    message_ai;
    created_at;
    user_photo_url;
    user_photo_key;
    analysis_photo;
    constructor(id, user_id, message_user, message_ai, created_at, user_photo_url, user_photo_key, analysis_photo) {
        this.id = id;
        this.user_id = user_id;
        this.message_user = message_user;
        this.message_ai = message_ai;
        this.created_at = created_at;
        this.user_photo_url = user_photo_url;
        this.user_photo_key = user_photo_key;
        this.analysis_photo = analysis_photo;
    }
}
exports.Conversation = Conversation;
//# sourceMappingURL=conversation.schema.js.map