"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisProvider = void 0;
const redis_1 = require("@upstash/redis");
exports.RedisProvider = {
    provide: 'REDIS_CLIENT',
    useFactory: () => {
        return new redis_1.Redis({
            url: process.env.UPSTASH_REDIS_REST_URL,
            token: process.env.UPSTASH_REDIS_REST_TOKEN,
        });
    },
};
//# sourceMappingURL=redis.provider.js.map