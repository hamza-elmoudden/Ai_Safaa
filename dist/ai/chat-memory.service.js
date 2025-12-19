"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMemoryService = void 0;
class ChatMemoryService {
    userMessages = new Map();
    saveMessage(userId, message) {
        if (!this.userMessages.has(userId)) {
            this.userMessages.set(userId, []);
        }
        this.userMessages.get(userId)?.push(message);
    }
    getMessages(userId) {
        return this.userMessages.get(userId) || [];
    }
}
exports.ChatMemoryService = ChatMemoryService;
//# sourceMappingURL=chat-memory.service.js.map