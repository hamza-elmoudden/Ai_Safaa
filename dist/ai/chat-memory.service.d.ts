export declare class ChatMemoryService {
    private userMessages;
    saveMessage(userId: string, message: any): void;
    getMessages(userId: string): any[];
}
