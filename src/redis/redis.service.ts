import { Inject, Injectable } from '@nestjs/common';
import { Redis } from '@upstash/redis';

@Injectable()
export class RedisService {
    constructor(
        @Inject('REDIS_CLIENT') private readonly redis: Redis,
    ) { }

    // ========================
    // 🔹 BASIC (STRING / JSON)
    // ========================

    async set(key: string, value: any, ttlSeconds?: number) {
        if (ttlSeconds) {
            await this.redis.set(key, value, { ex: ttlSeconds });
        } else {
            await this.redis.set(key, value);
        }
    }

    async get<T = any>(key: string): Promise<T | null> {
        return await this.redis.get(key);
    }

    async del(key: string) {
        await this.redis.del(key);
    }

    async exists(key: string): Promise<boolean> {
        const result = await this.redis.exists(key);
        return result === 1;
    }

    // ========================
    // 🔹 CACHE HELPERS
    // ========================

    async getOrSet<T>(
        key: string,
        callback: () => Promise<T>,
        ttlSeconds = 300,
    ): Promise<T> {
        const cached = await this.get<T>(key);

        if (cached) {
            console.log('⚡ From cache');
            return cached;
        }

        console.log('📦 From DB');

        const freshData = await callback();

        await this.set(key, freshData, ttlSeconds);

        return freshData;
    }

    // ========================
    // 🔹 LIST (CHAT SYSTEM 🔥)
    // ========================

    async pushMessage(key: string, message: any) {
        // تحويل الرسالة إلى JSON
        const jsonMessage = JSON.stringify(message);

        try {
            // التأكد من نوع المفتاح في Redis
            const type = await this.redis.type(key);

            // إذا المفتاح موجود ونوعه ليس list، نمسحه
            if (type !== 'list' && type !== 'none') {
                await this.redis.del(key);
            }

            // الآن نضيف الرسالة للقائمة
            await this.redis.lpush(key, jsonMessage);

        } catch (error) {
            console.error('Redis pushMessage error:', error);
            throw error; // يمكن حذفها لو تريد تجاهل الخطأ
        }
    }

    async pushMessageToStart(key: string, message: any) {
        await this.redis.lpush(key, JSON.stringify(message));
    }

    async getMessages<T = any>(key: string): Promise<T[]> {
        const data = await this.redis.lrange(key, 0, -1);
        return data.map((item) => JSON.parse(item));
    }

    async getLastMessages<T = any>(key: string, limit: number): Promise<T[]> {
        const data = await this.redis.lrange(key, -limit, -1);
        return data.map((item) => JSON.parse(item));
    }

    async trimMessages(key: string, maxLength: number) {
        await this.redis.ltrim(key, 0, maxLength - 1);
    }

    // ========================
    // 🔹 CHAT HELPER (BEST 🔥)
    // ========================

    async addChatMessage(userId: string, message: any) {
        const key = `conversations:${userId}`;

        // add message
        await this.redis.lpush(key, JSON.stringify(message));

        // keep only last 20 messages
        await this.redis.ltrim(key, 0, 19);
    }

    async getChatMessages<T = any>(userId: string): Promise<T[]> {
        const key = `chat:${userId}`;

        const data = await this.redis.lrange(key, 0, -1);

        return data.map((item) => JSON.parse(item)).reverse();
    }
}