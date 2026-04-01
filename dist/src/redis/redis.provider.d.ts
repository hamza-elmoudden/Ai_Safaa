import { Redis } from '@upstash/redis';
export declare const RedisProvider: {
    provide: string;
    useFactory: () => Redis;
};
