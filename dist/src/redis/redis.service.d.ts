import { Redis } from '@upstash/redis';
export declare class RedisService {
    private readonly redis;
    constructor(redis: Redis);
    set(key: string, value: any, ttlSeconds?: number): Promise<void>;
    get<T = any>(key: string): Promise<T | null>;
    del(key: string): Promise<void>;
    exists(key: string): Promise<boolean>;
    getOrSet<T>(key: string, callback: () => Promise<T>, ttlSeconds?: number): Promise<T>;
    pushMessage(key: string, message: any): Promise<void>;
    pushMessageToStart(key: string, message: any): Promise<void>;
    getMessages<T = any>(key: string): Promise<T[]>;
    getLastMessages<T = any>(key: string, limit: number): Promise<T[]>;
    trimMessages(key: string, maxLength: number): Promise<void>;
    addChatMessage(userId: string, message: any): Promise<void>;
    getChatMessages<T = any>(userId: string): Promise<T[]>;
}
