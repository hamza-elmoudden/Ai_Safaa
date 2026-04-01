"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetConversationsQuery = void 0;
class GetConversationsQuery {
    user_id;
    page;
    limit;
    constructor(user_id, page, limit) {
        this.user_id = user_id;
        this.page = page;
        this.limit = limit;
    }
}
exports.GetConversationsQuery = GetConversationsQuery;
//# sourceMappingURL=get-conversations.impl.js.map