"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const common_1 = require("@nestjs/common");
const redis_1 = require("@upstash/redis");
let RedisService = class RedisService {
    redis;
    constructor(redis) {
        this.redis = redis;
    }
    async set(key, value, ttlSeconds) {
        if (ttlSeconds) {
            await this.redis.set(key, value, { ex: ttlSeconds });
        }
        else {
            await this.redis.set(key, value);
        }
    }
    async get(key) {
        return await this.redis.get(key);
    }
    async del(key) {
        await this.redis.del(key);
    }
    async exists(key) {
        const result = await this.redis.exists(key);
        return result === 1;
    }
    async getOrSet(key, callback, ttlSeconds = 300) {
        const cached = await this.get(key);
        if (cached) {
            console.log('⚡ From cache');
            return cached;
        }
        console.log('📦 From DB');
        const freshData = await callback();
        await this.set(key, freshData, ttlSeconds);
        return freshData;
    }
    async pushMessage(key, message) {
        const jsonMessage = JSON.stringify(message);
        try {
            const type = await this.redis.type(key);
            if (type !== 'list' && type !== 'none') {
                await this.redis.del(key);
            }
            await this.redis.lpush(key, jsonMessage);
        }
        catch (error) {
            console.error('Redis pushMessage error:', error);
            throw error;
        }
    }
    async pushMessageToStart(key, message) {
        await this.redis.lpush(key, JSON.stringify(message));
    }
    async getMessages(key) {
        const data = await this.redis.lrange(key, 0, -1);
        return data.map((item) => JSON.parse(item));
    }
    async getLastMessages(key, limit) {
        const data = await this.redis.lrange(key, -limit, -1);
        return data.map((item) => JSON.parse(item));
    }
    async trimMessages(key, maxLength) {
        await this.redis.ltrim(key, 0, maxLength - 1);
    }
    async addChatMessage(userId, message) {
        const key = `conversations:${userId}`;
        await this.redis.lpush(key, JSON.stringify(message));
        await this.redis.ltrim(key, 0, 19);
    }
    async getChatMessages(userId) {
        const key = `chat:${userId}`;
        const data = await this.redis.lrange(key, 0, -1);
        return data.map((item) => JSON.parse(item)).reverse();
    }
};
exports.RedisService = RedisService;
exports.RedisService = RedisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('REDIS_CLIENT')),
    __metadata("design:paramtypes", [redis_1.Redis])
], RedisService);
//# sourceMappingURL=redis.service.js.map