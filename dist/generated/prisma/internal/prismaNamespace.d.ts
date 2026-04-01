import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly chat_treatment: "chat_treatment";
    readonly conversations: "conversations";
    readonly payments: "payments";
    readonly skin_profiles: "skin_profiles";
    readonly subscriptions: "subscriptions";
    readonly treatment_plans: "treatment_plans";
    readonly users: "users";
    readonly token_usage: "token_usage";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "chat_treatment" | "conversations" | "payments" | "skin_profiles" | "subscriptions" | "treatment_plans" | "users" | "token_usage";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        chat_treatment: {
            payload: Prisma.$chat_treatmentPayload<ExtArgs>;
            fields: Prisma.chat_treatmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.chat_treatmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chat_treatmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.chat_treatmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chat_treatmentPayload>;
                };
                findFirst: {
                    args: Prisma.chat_treatmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chat_treatmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.chat_treatmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chat_treatmentPayload>;
                };
                findMany: {
                    args: Prisma.chat_treatmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chat_treatmentPayload>[];
                };
                create: {
                    args: Prisma.chat_treatmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chat_treatmentPayload>;
                };
                createMany: {
                    args: Prisma.chat_treatmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.chat_treatmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chat_treatmentPayload>[];
                };
                delete: {
                    args: Prisma.chat_treatmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chat_treatmentPayload>;
                };
                update: {
                    args: Prisma.chat_treatmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chat_treatmentPayload>;
                };
                deleteMany: {
                    args: Prisma.chat_treatmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.chat_treatmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.chat_treatmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chat_treatmentPayload>[];
                };
                upsert: {
                    args: Prisma.chat_treatmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chat_treatmentPayload>;
                };
                aggregate: {
                    args: Prisma.Chat_treatmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChat_treatment>;
                };
                groupBy: {
                    args: Prisma.chat_treatmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Chat_treatmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.chat_treatmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Chat_treatmentCountAggregateOutputType> | number;
                };
            };
        };
        conversations: {
            payload: Prisma.$conversationsPayload<ExtArgs>;
            fields: Prisma.conversationsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.conversationsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversationsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.conversationsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversationsPayload>;
                };
                findFirst: {
                    args: Prisma.conversationsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversationsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.conversationsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversationsPayload>;
                };
                findMany: {
                    args: Prisma.conversationsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversationsPayload>[];
                };
                create: {
                    args: Prisma.conversationsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversationsPayload>;
                };
                createMany: {
                    args: Prisma.conversationsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.conversationsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversationsPayload>[];
                };
                delete: {
                    args: Prisma.conversationsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversationsPayload>;
                };
                update: {
                    args: Prisma.conversationsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversationsPayload>;
                };
                deleteMany: {
                    args: Prisma.conversationsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.conversationsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.conversationsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversationsPayload>[];
                };
                upsert: {
                    args: Prisma.conversationsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversationsPayload>;
                };
                aggregate: {
                    args: Prisma.ConversationsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConversations>;
                };
                groupBy: {
                    args: Prisma.conversationsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConversationsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.conversationsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConversationsCountAggregateOutputType> | number;
                };
            };
        };
        payments: {
            payload: Prisma.$paymentsPayload<ExtArgs>;
            fields: Prisma.paymentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.paymentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                findFirst: {
                    args: Prisma.paymentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                findMany: {
                    args: Prisma.paymentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                create: {
                    args: Prisma.paymentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                createMany: {
                    args: Prisma.paymentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                delete: {
                    args: Prisma.paymentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                update: {
                    args: Prisma.paymentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                deleteMany: {
                    args: Prisma.paymentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.paymentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                upsert: {
                    args: Prisma.paymentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                aggregate: {
                    args: Prisma.PaymentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayments>;
                };
                groupBy: {
                    args: Prisma.paymentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.paymentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentsCountAggregateOutputType> | number;
                };
            };
        };
        skin_profiles: {
            payload: Prisma.$skin_profilesPayload<ExtArgs>;
            fields: Prisma.skin_profilesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.skin_profilesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$skin_profilesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.skin_profilesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$skin_profilesPayload>;
                };
                findFirst: {
                    args: Prisma.skin_profilesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$skin_profilesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.skin_profilesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$skin_profilesPayload>;
                };
                findMany: {
                    args: Prisma.skin_profilesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$skin_profilesPayload>[];
                };
                create: {
                    args: Prisma.skin_profilesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$skin_profilesPayload>;
                };
                createMany: {
                    args: Prisma.skin_profilesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.skin_profilesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$skin_profilesPayload>[];
                };
                delete: {
                    args: Prisma.skin_profilesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$skin_profilesPayload>;
                };
                update: {
                    args: Prisma.skin_profilesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$skin_profilesPayload>;
                };
                deleteMany: {
                    args: Prisma.skin_profilesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.skin_profilesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.skin_profilesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$skin_profilesPayload>[];
                };
                upsert: {
                    args: Prisma.skin_profilesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$skin_profilesPayload>;
                };
                aggregate: {
                    args: Prisma.Skin_profilesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSkin_profiles>;
                };
                groupBy: {
                    args: Prisma.skin_profilesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Skin_profilesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.skin_profilesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Skin_profilesCountAggregateOutputType> | number;
                };
            };
        };
        subscriptions: {
            payload: Prisma.$subscriptionsPayload<ExtArgs>;
            fields: Prisma.subscriptionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.subscriptionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.subscriptionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload>;
                };
                findFirst: {
                    args: Prisma.subscriptionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.subscriptionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload>;
                };
                findMany: {
                    args: Prisma.subscriptionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload>[];
                };
                create: {
                    args: Prisma.subscriptionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload>;
                };
                createMany: {
                    args: Prisma.subscriptionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.subscriptionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload>[];
                };
                delete: {
                    args: Prisma.subscriptionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload>;
                };
                update: {
                    args: Prisma.subscriptionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload>;
                };
                deleteMany: {
                    args: Prisma.subscriptionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.subscriptionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.subscriptionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload>[];
                };
                upsert: {
                    args: Prisma.subscriptionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload>;
                };
                aggregate: {
                    args: Prisma.SubscriptionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubscriptions>;
                };
                groupBy: {
                    args: Prisma.subscriptionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubscriptionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.subscriptionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubscriptionsCountAggregateOutputType> | number;
                };
            };
        };
        treatment_plans: {
            payload: Prisma.$treatment_plansPayload<ExtArgs>;
            fields: Prisma.treatment_plansFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.treatment_plansFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatment_plansPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.treatment_plansFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatment_plansPayload>;
                };
                findFirst: {
                    args: Prisma.treatment_plansFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatment_plansPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.treatment_plansFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatment_plansPayload>;
                };
                findMany: {
                    args: Prisma.treatment_plansFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatment_plansPayload>[];
                };
                create: {
                    args: Prisma.treatment_plansCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatment_plansPayload>;
                };
                createMany: {
                    args: Prisma.treatment_plansCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.treatment_plansCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatment_plansPayload>[];
                };
                delete: {
                    args: Prisma.treatment_plansDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatment_plansPayload>;
                };
                update: {
                    args: Prisma.treatment_plansUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatment_plansPayload>;
                };
                deleteMany: {
                    args: Prisma.treatment_plansDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.treatment_plansUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.treatment_plansUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatment_plansPayload>[];
                };
                upsert: {
                    args: Prisma.treatment_plansUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatment_plansPayload>;
                };
                aggregate: {
                    args: Prisma.Treatment_plansAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTreatment_plans>;
                };
                groupBy: {
                    args: Prisma.treatment_plansGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Treatment_plansGroupByOutputType>[];
                };
                count: {
                    args: Prisma.treatment_plansCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Treatment_plansCountAggregateOutputType> | number;
                };
            };
        };
        users: {
            payload: Prisma.$usersPayload<ExtArgs>;
            fields: Prisma.usersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findFirst: {
                    args: Prisma.usersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findMany: {
                    args: Prisma.usersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                create: {
                    args: Prisma.usersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                createMany: {
                    args: Prisma.usersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                delete: {
                    args: Prisma.usersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                update: {
                    args: Prisma.usersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                deleteMany: {
                    args: Prisma.usersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                upsert: {
                    args: Prisma.usersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                aggregate: {
                    args: Prisma.UsersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsers>;
                };
                groupBy: {
                    args: Prisma.usersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersCountAggregateOutputType> | number;
                };
            };
        };
        token_usage: {
            payload: Prisma.$token_usagePayload<ExtArgs>;
            fields: Prisma.token_usageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.token_usageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$token_usagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.token_usageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$token_usagePayload>;
                };
                findFirst: {
                    args: Prisma.token_usageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$token_usagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.token_usageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$token_usagePayload>;
                };
                findMany: {
                    args: Prisma.token_usageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$token_usagePayload>[];
                };
                create: {
                    args: Prisma.token_usageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$token_usagePayload>;
                };
                createMany: {
                    args: Prisma.token_usageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.token_usageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$token_usagePayload>[];
                };
                delete: {
                    args: Prisma.token_usageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$token_usagePayload>;
                };
                update: {
                    args: Prisma.token_usageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$token_usagePayload>;
                };
                deleteMany: {
                    args: Prisma.token_usageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.token_usageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.token_usageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$token_usagePayload>[];
                };
                upsert: {
                    args: Prisma.token_usageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$token_usagePayload>;
                };
                aggregate: {
                    args: Prisma.Token_usageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateToken_usage>;
                };
                groupBy: {
                    args: Prisma.token_usageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Token_usageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.token_usageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Token_usageCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Chat_treatmentScalarFieldEnum: {
    readonly id: "id";
    readonly plan_id: "plan_id";
    readonly user_message: "user_message";
    readonly ai_response: "ai_response";
    readonly have_photo: "have_photo";
    readonly day_number: "day_number";
    readonly image_url: "image_url";
    readonly image_key: "image_key";
    readonly created_at: "created_at";
};
export type Chat_treatmentScalarFieldEnum = (typeof Chat_treatmentScalarFieldEnum)[keyof typeof Chat_treatmentScalarFieldEnum];
export declare const ConversationsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly message_user: "message_user";
    readonly user_photo_url: "user_photo_url";
    readonly user_photo_key: "user_photo_key";
    readonly analysis_photo: "analysis_photo";
    readonly message_ai: "message_ai";
    readonly created_at: "created_at";
};
export type ConversationsScalarFieldEnum = (typeof ConversationsScalarFieldEnum)[keyof typeof ConversationsScalarFieldEnum];
export declare const PaymentsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly subscription_id: "subscription_id";
    readonly amount_mad: "amount_mad";
    readonly method: "method";
    readonly status: "status";
    readonly provider_ref: "provider_ref";
    readonly provider_meta: "provider_meta";
    readonly starts_at: "starts_at";
    readonly expires_at: "expires_at";
};
export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum];
export declare const Skin_profilesScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly skin_type: "skin_type";
    readonly concerns: "concerns";
    readonly allergies: "allergies";
    readonly notes: "notes";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Skin_profilesScalarFieldEnum = (typeof Skin_profilesScalarFieldEnum)[keyof typeof Skin_profilesScalarFieldEnum];
export declare const SubscriptionsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly price_mad: "price_mad";
    readonly limit_photo_treatment: "limit_photo_treatment";
    readonly treatment_plans: "treatment_plans";
    readonly limit_photo_check: "limit_photo_check";
    readonly progress_tracking: "progress_tracking";
    readonly vip_consultation: "vip_consultation";
    readonly features: "features";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
};
export type SubscriptionsScalarFieldEnum = (typeof SubscriptionsScalarFieldEnum)[keyof typeof SubscriptionsScalarFieldEnum];
export declare const Treatment_plansScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly title: "title";
    readonly status: "status";
    readonly improvement_pct: "improvement_pct";
    readonly areas_treated: "areas_treated";
    readonly initial_photo_url: "initial_photo_url";
    readonly initial_photo_key: "initial_photo_key";
    readonly ai_diagnosis: "ai_diagnosis";
    readonly ai_model: "ai_model";
    readonly next_checkin_at: "next_checkin_at";
    readonly started_at: "started_at";
    readonly completed_at: "completed_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly path: "path";
    readonly duration_days: "duration_days";
};
export type Treatment_plansScalarFieldEnum = (typeof Treatment_plansScalarFieldEnum)[keyof typeof Treatment_plansScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly phone: "phone";
    readonly country_code: "country_code";
    readonly city: "city";
    readonly date_of_birth: "date_of_birth";
    readonly password_hash: "password_hash";
    readonly google_provider: "google_provider";
    readonly google_id: "google_id";
    readonly full_name: "full_name";
    readonly role: "role";
    readonly is_verified: "is_verified";
    readonly otp_code: "otp_code";
    readonly otp_expires_at: "otp_expires_at";
    readonly last_login: "last_login";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly refresh_token: "refresh_token";
    readonly is_complete_login: "is_complete_login";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const Token_usageScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly source: "source";
    readonly ref_id: "ref_id";
    readonly tokens_input: "tokens_input";
    readonly tokens_output: "tokens_output";
    readonly tokens_total: "tokens_total";
    readonly ai_model: "ai_model";
    readonly cost_usd: "cost_usd";
    readonly created_at: "created_at";
    readonly plan_id: "plan_id";
};
export type Token_usageScalarFieldEnum = (typeof Token_usageScalarFieldEnum)[keyof typeof Token_usageScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type Enumpayment_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_method'>;
export type ListEnumpayment_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_method[]'>;
export type Enumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status'>;
export type ListEnumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type Enumskin_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'skin_type'>;
export type ListEnumskin_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'skin_type[]'>;
export type Enumplan_nameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'plan_name'>;
export type ListEnumplan_nameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'plan_name[]'>;
export type Enumplan_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'plan_status'>;
export type ListEnumplan_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'plan_status[]'>;
export type Enumareas_treatedFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'areas_treated'>;
export type ListEnumareas_treatedFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'areas_treated[]'>;
export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>;
export type ListEnumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role[]'>;
export type Enumtoken_sourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'token_source'>;
export type ListEnumtoken_sourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'token_source[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    chat_treatment?: Prisma.chat_treatmentOmit;
    conversations?: Prisma.conversationsOmit;
    payments?: Prisma.paymentsOmit;
    skin_profiles?: Prisma.skin_profilesOmit;
    subscriptions?: Prisma.subscriptionsOmit;
    treatment_plans?: Prisma.treatment_plansOmit;
    users?: Prisma.usersOmit;
    token_usage?: Prisma.token_usageOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
