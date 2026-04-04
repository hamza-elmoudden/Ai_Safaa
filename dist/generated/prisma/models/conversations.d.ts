import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type conversationsModel = runtime.Types.Result.DefaultSelection<Prisma.$conversationsPayload>;
export type AggregateConversations = {
    _count: ConversationsCountAggregateOutputType | null;
    _min: ConversationsMinAggregateOutputType | null;
    _max: ConversationsMaxAggregateOutputType | null;
};
export type ConversationsMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    message_user: string | null;
    user_photo_url: string | null;
    user_photo_key: string | null;
    analysis_photo: string | null;
    message_ai: string | null;
    created_at: Date | null;
};
export type ConversationsMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    message_user: string | null;
    user_photo_url: string | null;
    user_photo_key: string | null;
    analysis_photo: string | null;
    message_ai: string | null;
    created_at: Date | null;
};
export type ConversationsCountAggregateOutputType = {
    id: number;
    user_id: number;
    message_user: number;
    user_photo_url: number;
    user_photo_key: number;
    analysis_photo: number;
    message_ai: number;
    created_at: number;
    _all: number;
};
export type ConversationsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    message_user?: true;
    user_photo_url?: true;
    user_photo_key?: true;
    analysis_photo?: true;
    message_ai?: true;
    created_at?: true;
};
export type ConversationsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    message_user?: true;
    user_photo_url?: true;
    user_photo_key?: true;
    analysis_photo?: true;
    message_ai?: true;
    created_at?: true;
};
export type ConversationsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    message_user?: true;
    user_photo_url?: true;
    user_photo_key?: true;
    analysis_photo?: true;
    message_ai?: true;
    created_at?: true;
    _all?: true;
};
export type ConversationsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.conversationsWhereInput;
    orderBy?: Prisma.conversationsOrderByWithRelationInput | Prisma.conversationsOrderByWithRelationInput[];
    cursor?: Prisma.conversationsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ConversationsCountAggregateInputType;
    _min?: ConversationsMinAggregateInputType;
    _max?: ConversationsMaxAggregateInputType;
};
export type GetConversationsAggregateType<T extends ConversationsAggregateArgs> = {
    [P in keyof T & keyof AggregateConversations]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConversations[P]> : Prisma.GetScalarType<T[P], AggregateConversations[P]>;
};
export type conversationsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.conversationsWhereInput;
    orderBy?: Prisma.conversationsOrderByWithAggregationInput | Prisma.conversationsOrderByWithAggregationInput[];
    by: Prisma.ConversationsScalarFieldEnum[] | Prisma.ConversationsScalarFieldEnum;
    having?: Prisma.conversationsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConversationsCountAggregateInputType | true;
    _min?: ConversationsMinAggregateInputType;
    _max?: ConversationsMaxAggregateInputType;
};
export type ConversationsGroupByOutputType = {
    id: string;
    user_id: string;
    message_user: string;
    user_photo_url: string | null;
    user_photo_key: string | null;
    analysis_photo: string | null;
    message_ai: string;
    created_at: Date;
    _count: ConversationsCountAggregateOutputType | null;
    _min: ConversationsMinAggregateOutputType | null;
    _max: ConversationsMaxAggregateOutputType | null;
};
export type GetConversationsGroupByPayload<T extends conversationsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConversationsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConversationsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConversationsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConversationsGroupByOutputType[P]>;
}>>;
export type conversationsWhereInput = {
    AND?: Prisma.conversationsWhereInput | Prisma.conversationsWhereInput[];
    OR?: Prisma.conversationsWhereInput[];
    NOT?: Prisma.conversationsWhereInput | Prisma.conversationsWhereInput[];
    id?: Prisma.UuidFilter<"conversations"> | string;
    user_id?: Prisma.UuidFilter<"conversations"> | string;
    message_user?: Prisma.StringFilter<"conversations"> | string;
    user_photo_url?: Prisma.StringNullableFilter<"conversations"> | string | null;
    user_photo_key?: Prisma.StringNullableFilter<"conversations"> | string | null;
    analysis_photo?: Prisma.StringNullableFilter<"conversations"> | string | null;
    message_ai?: Prisma.StringFilter<"conversations"> | string;
    created_at?: Prisma.DateTimeFilter<"conversations"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type conversationsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    message_user?: Prisma.SortOrder;
    user_photo_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_photo_key?: Prisma.SortOrderInput | Prisma.SortOrder;
    analysis_photo?: Prisma.SortOrderInput | Prisma.SortOrder;
    message_ai?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type conversationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.conversationsWhereInput | Prisma.conversationsWhereInput[];
    OR?: Prisma.conversationsWhereInput[];
    NOT?: Prisma.conversationsWhereInput | Prisma.conversationsWhereInput[];
    user_id?: Prisma.UuidFilter<"conversations"> | string;
    message_user?: Prisma.StringFilter<"conversations"> | string;
    user_photo_url?: Prisma.StringNullableFilter<"conversations"> | string | null;
    user_photo_key?: Prisma.StringNullableFilter<"conversations"> | string | null;
    analysis_photo?: Prisma.StringNullableFilter<"conversations"> | string | null;
    message_ai?: Prisma.StringFilter<"conversations"> | string;
    created_at?: Prisma.DateTimeFilter<"conversations"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id">;
export type conversationsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    message_user?: Prisma.SortOrder;
    user_photo_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_photo_key?: Prisma.SortOrderInput | Prisma.SortOrder;
    analysis_photo?: Prisma.SortOrderInput | Prisma.SortOrder;
    message_ai?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.conversationsCountOrderByAggregateInput;
    _max?: Prisma.conversationsMaxOrderByAggregateInput;
    _min?: Prisma.conversationsMinOrderByAggregateInput;
};
export type conversationsScalarWhereWithAggregatesInput = {
    AND?: Prisma.conversationsScalarWhereWithAggregatesInput | Prisma.conversationsScalarWhereWithAggregatesInput[];
    OR?: Prisma.conversationsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.conversationsScalarWhereWithAggregatesInput | Prisma.conversationsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"conversations"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"conversations"> | string;
    message_user?: Prisma.StringWithAggregatesFilter<"conversations"> | string;
    user_photo_url?: Prisma.StringNullableWithAggregatesFilter<"conversations"> | string | null;
    user_photo_key?: Prisma.StringNullableWithAggregatesFilter<"conversations"> | string | null;
    analysis_photo?: Prisma.StringNullableWithAggregatesFilter<"conversations"> | string | null;
    message_ai?: Prisma.StringWithAggregatesFilter<"conversations"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"conversations"> | Date | string;
};
export type conversationsCreateInput = {
    id?: string;
    message_user: string;
    user_photo_url?: string | null;
    user_photo_key?: string | null;
    analysis_photo?: string | null;
    message_ai: string;
    created_at?: Date | string;
    users: Prisma.usersCreateNestedOneWithoutConversationsInput;
};
export type conversationsUncheckedCreateInput = {
    id?: string;
    user_id: string;
    message_user: string;
    user_photo_url?: string | null;
    user_photo_key?: string | null;
    analysis_photo?: string | null;
    message_ai: string;
    created_at?: Date | string;
};
export type conversationsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    message_user?: Prisma.StringFieldUpdateOperationsInput | string;
    user_photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_photo_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    analysis_photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message_ai?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneRequiredWithoutConversationsNestedInput;
};
export type conversationsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    message_user?: Prisma.StringFieldUpdateOperationsInput | string;
    user_photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_photo_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    analysis_photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message_ai?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type conversationsCreateManyInput = {
    id?: string;
    user_id: string;
    message_user: string;
    user_photo_url?: string | null;
    user_photo_key?: string | null;
    analysis_photo?: string | null;
    message_ai: string;
    created_at?: Date | string;
};
export type conversationsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    message_user?: Prisma.StringFieldUpdateOperationsInput | string;
    user_photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_photo_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    analysis_photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message_ai?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type conversationsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    message_user?: Prisma.StringFieldUpdateOperationsInput | string;
    user_photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_photo_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    analysis_photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message_ai?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type conversationsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    message_user?: Prisma.SortOrder;
    user_photo_url?: Prisma.SortOrder;
    user_photo_key?: Prisma.SortOrder;
    analysis_photo?: Prisma.SortOrder;
    message_ai?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type conversationsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    message_user?: Prisma.SortOrder;
    user_photo_url?: Prisma.SortOrder;
    user_photo_key?: Prisma.SortOrder;
    analysis_photo?: Prisma.SortOrder;
    message_ai?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type conversationsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    message_user?: Prisma.SortOrder;
    user_photo_url?: Prisma.SortOrder;
    user_photo_key?: Prisma.SortOrder;
    analysis_photo?: Prisma.SortOrder;
    message_ai?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ConversationsListRelationFilter = {
    every?: Prisma.conversationsWhereInput;
    some?: Prisma.conversationsWhereInput;
    none?: Prisma.conversationsWhereInput;
};
export type conversationsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type conversationsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.conversationsCreateWithoutUsersInput, Prisma.conversationsUncheckedCreateWithoutUsersInput> | Prisma.conversationsCreateWithoutUsersInput[] | Prisma.conversationsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.conversationsCreateOrConnectWithoutUsersInput | Prisma.conversationsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.conversationsCreateManyUsersInputEnvelope;
    connect?: Prisma.conversationsWhereUniqueInput | Prisma.conversationsWhereUniqueInput[];
};
export type conversationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.conversationsCreateWithoutUsersInput, Prisma.conversationsUncheckedCreateWithoutUsersInput> | Prisma.conversationsCreateWithoutUsersInput[] | Prisma.conversationsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.conversationsCreateOrConnectWithoutUsersInput | Prisma.conversationsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.conversationsCreateManyUsersInputEnvelope;
    connect?: Prisma.conversationsWhereUniqueInput | Prisma.conversationsWhereUniqueInput[];
};
export type conversationsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.conversationsCreateWithoutUsersInput, Prisma.conversationsUncheckedCreateWithoutUsersInput> | Prisma.conversationsCreateWithoutUsersInput[] | Prisma.conversationsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.conversationsCreateOrConnectWithoutUsersInput | Prisma.conversationsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.conversationsUpsertWithWhereUniqueWithoutUsersInput | Prisma.conversationsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.conversationsCreateManyUsersInputEnvelope;
    set?: Prisma.conversationsWhereUniqueInput | Prisma.conversationsWhereUniqueInput[];
    disconnect?: Prisma.conversationsWhereUniqueInput | Prisma.conversationsWhereUniqueInput[];
    delete?: Prisma.conversationsWhereUniqueInput | Prisma.conversationsWhereUniqueInput[];
    connect?: Prisma.conversationsWhereUniqueInput | Prisma.conversationsWhereUniqueInput[];
    update?: Prisma.conversationsUpdateWithWhereUniqueWithoutUsersInput | Prisma.conversationsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.conversationsUpdateManyWithWhereWithoutUsersInput | Prisma.conversationsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.conversationsScalarWhereInput | Prisma.conversationsScalarWhereInput[];
};
export type conversationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.conversationsCreateWithoutUsersInput, Prisma.conversationsUncheckedCreateWithoutUsersInput> | Prisma.conversationsCreateWithoutUsersInput[] | Prisma.conversationsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.conversationsCreateOrConnectWithoutUsersInput | Prisma.conversationsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.conversationsUpsertWithWhereUniqueWithoutUsersInput | Prisma.conversationsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.conversationsCreateManyUsersInputEnvelope;
    set?: Prisma.conversationsWhereUniqueInput | Prisma.conversationsWhereUniqueInput[];
    disconnect?: Prisma.conversationsWhereUniqueInput | Prisma.conversationsWhereUniqueInput[];
    delete?: Prisma.conversationsWhereUniqueInput | Prisma.conversationsWhereUniqueInput[];
    connect?: Prisma.conversationsWhereUniqueInput | Prisma.conversationsWhereUniqueInput[];
    update?: Prisma.conversationsUpdateWithWhereUniqueWithoutUsersInput | Prisma.conversationsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.conversationsUpdateManyWithWhereWithoutUsersInput | Prisma.conversationsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.conversationsScalarWhereInput | Prisma.conversationsScalarWhereInput[];
};
export type conversationsCreateWithoutUsersInput = {
    id?: string;
    message_user: string;
    user_photo_url?: string | null;
    user_photo_key?: string | null;
    analysis_photo?: string | null;
    message_ai: string;
    created_at?: Date | string;
};
export type conversationsUncheckedCreateWithoutUsersInput = {
    id?: string;
    message_user: string;
    user_photo_url?: string | null;
    user_photo_key?: string | null;
    analysis_photo?: string | null;
    message_ai: string;
    created_at?: Date | string;
};
export type conversationsCreateOrConnectWithoutUsersInput = {
    where: Prisma.conversationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.conversationsCreateWithoutUsersInput, Prisma.conversationsUncheckedCreateWithoutUsersInput>;
};
export type conversationsCreateManyUsersInputEnvelope = {
    data: Prisma.conversationsCreateManyUsersInput | Prisma.conversationsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type conversationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.conversationsWhereUniqueInput;
    update: Prisma.XOR<Prisma.conversationsUpdateWithoutUsersInput, Prisma.conversationsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.conversationsCreateWithoutUsersInput, Prisma.conversationsUncheckedCreateWithoutUsersInput>;
};
export type conversationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.conversationsWhereUniqueInput;
    data: Prisma.XOR<Prisma.conversationsUpdateWithoutUsersInput, Prisma.conversationsUncheckedUpdateWithoutUsersInput>;
};
export type conversationsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.conversationsScalarWhereInput;
    data: Prisma.XOR<Prisma.conversationsUpdateManyMutationInput, Prisma.conversationsUncheckedUpdateManyWithoutUsersInput>;
};
export type conversationsScalarWhereInput = {
    AND?: Prisma.conversationsScalarWhereInput | Prisma.conversationsScalarWhereInput[];
    OR?: Prisma.conversationsScalarWhereInput[];
    NOT?: Prisma.conversationsScalarWhereInput | Prisma.conversationsScalarWhereInput[];
    id?: Prisma.UuidFilter<"conversations"> | string;
    user_id?: Prisma.UuidFilter<"conversations"> | string;
    message_user?: Prisma.StringFilter<"conversations"> | string;
    user_photo_url?: Prisma.StringNullableFilter<"conversations"> | string | null;
    user_photo_key?: Prisma.StringNullableFilter<"conversations"> | string | null;
    analysis_photo?: Prisma.StringNullableFilter<"conversations"> | string | null;
    message_ai?: Prisma.StringFilter<"conversations"> | string;
    created_at?: Prisma.DateTimeFilter<"conversations"> | Date | string;
};
export type conversationsCreateManyUsersInput = {
    id?: string;
    message_user: string;
    user_photo_url?: string | null;
    user_photo_key?: string | null;
    analysis_photo?: string | null;
    message_ai: string;
    created_at?: Date | string;
};
export type conversationsUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    message_user?: Prisma.StringFieldUpdateOperationsInput | string;
    user_photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_photo_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    analysis_photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message_ai?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type conversationsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    message_user?: Prisma.StringFieldUpdateOperationsInput | string;
    user_photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_photo_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    analysis_photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message_ai?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type conversationsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    message_user?: Prisma.StringFieldUpdateOperationsInput | string;
    user_photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_photo_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    analysis_photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message_ai?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type conversationsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    message_user?: boolean;
    user_photo_url?: boolean;
    user_photo_key?: boolean;
    analysis_photo?: boolean;
    message_ai?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["conversations"]>;
export type conversationsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    message_user?: boolean;
    user_photo_url?: boolean;
    user_photo_key?: boolean;
    analysis_photo?: boolean;
    message_ai?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["conversations"]>;
export type conversationsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    message_user?: boolean;
    user_photo_url?: boolean;
    user_photo_key?: boolean;
    analysis_photo?: boolean;
    message_ai?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["conversations"]>;
export type conversationsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    message_user?: boolean;
    user_photo_url?: boolean;
    user_photo_key?: boolean;
    analysis_photo?: boolean;
    message_ai?: boolean;
    created_at?: boolean;
};
export type conversationsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "message_user" | "user_photo_url" | "user_photo_key" | "analysis_photo" | "message_ai" | "created_at", ExtArgs["result"]["conversations"]>;
export type conversationsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type conversationsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type conversationsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $conversationsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "conversations";
    objects: {
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        message_user: string;
        user_photo_url: string | null;
        user_photo_key: string | null;
        analysis_photo: string | null;
        message_ai: string;
        created_at: Date;
    }, ExtArgs["result"]["conversations"]>;
    composites: {};
};
export type conversationsGetPayload<S extends boolean | null | undefined | conversationsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$conversationsPayload, S>;
export type conversationsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<conversationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConversationsCountAggregateInputType | true;
};
export interface conversationsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['conversations'];
        meta: {
            name: 'conversations';
        };
    };
    findUnique<T extends conversationsFindUniqueArgs>(args: Prisma.SelectSubset<T, conversationsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__conversationsClient<runtime.Types.Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends conversationsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, conversationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__conversationsClient<runtime.Types.Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends conversationsFindFirstArgs>(args?: Prisma.SelectSubset<T, conversationsFindFirstArgs<ExtArgs>>): Prisma.Prisma__conversationsClient<runtime.Types.Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends conversationsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, conversationsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__conversationsClient<runtime.Types.Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends conversationsFindManyArgs>(args?: Prisma.SelectSubset<T, conversationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends conversationsCreateArgs>(args: Prisma.SelectSubset<T, conversationsCreateArgs<ExtArgs>>): Prisma.Prisma__conversationsClient<runtime.Types.Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends conversationsCreateManyArgs>(args?: Prisma.SelectSubset<T, conversationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends conversationsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, conversationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends conversationsDeleteArgs>(args: Prisma.SelectSubset<T, conversationsDeleteArgs<ExtArgs>>): Prisma.Prisma__conversationsClient<runtime.Types.Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends conversationsUpdateArgs>(args: Prisma.SelectSubset<T, conversationsUpdateArgs<ExtArgs>>): Prisma.Prisma__conversationsClient<runtime.Types.Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends conversationsDeleteManyArgs>(args?: Prisma.SelectSubset<T, conversationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends conversationsUpdateManyArgs>(args: Prisma.SelectSubset<T, conversationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends conversationsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, conversationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends conversationsUpsertArgs>(args: Prisma.SelectSubset<T, conversationsUpsertArgs<ExtArgs>>): Prisma.Prisma__conversationsClient<runtime.Types.Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends conversationsCountArgs>(args?: Prisma.Subset<T, conversationsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConversationsCountAggregateOutputType> : number>;
    aggregate<T extends ConversationsAggregateArgs>(args: Prisma.Subset<T, ConversationsAggregateArgs>): Prisma.PrismaPromise<GetConversationsAggregateType<T>>;
    groupBy<T extends conversationsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: conversationsGroupByArgs['orderBy'];
    } : {
        orderBy?: conversationsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, conversationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: conversationsFieldRefs;
}
export interface Prisma__conversationsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface conversationsFieldRefs {
    readonly id: Prisma.FieldRef<"conversations", 'String'>;
    readonly user_id: Prisma.FieldRef<"conversations", 'String'>;
    readonly message_user: Prisma.FieldRef<"conversations", 'String'>;
    readonly user_photo_url: Prisma.FieldRef<"conversations", 'String'>;
    readonly user_photo_key: Prisma.FieldRef<"conversations", 'String'>;
    readonly analysis_photo: Prisma.FieldRef<"conversations", 'String'>;
    readonly message_ai: Prisma.FieldRef<"conversations", 'String'>;
    readonly created_at: Prisma.FieldRef<"conversations", 'DateTime'>;
}
export type conversationsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversationsSelect<ExtArgs> | null;
    omit?: Prisma.conversationsOmit<ExtArgs> | null;
    include?: Prisma.conversationsInclude<ExtArgs> | null;
    where: Prisma.conversationsWhereUniqueInput;
};
export type conversationsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversationsSelect<ExtArgs> | null;
    omit?: Prisma.conversationsOmit<ExtArgs> | null;
    include?: Prisma.conversationsInclude<ExtArgs> | null;
    where: Prisma.conversationsWhereUniqueInput;
};
export type conversationsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversationsSelect<ExtArgs> | null;
    omit?: Prisma.conversationsOmit<ExtArgs> | null;
    include?: Prisma.conversationsInclude<ExtArgs> | null;
    where?: Prisma.conversationsWhereInput;
    orderBy?: Prisma.conversationsOrderByWithRelationInput | Prisma.conversationsOrderByWithRelationInput[];
    cursor?: Prisma.conversationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConversationsScalarFieldEnum | Prisma.ConversationsScalarFieldEnum[];
};
export type conversationsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversationsSelect<ExtArgs> | null;
    omit?: Prisma.conversationsOmit<ExtArgs> | null;
    include?: Prisma.conversationsInclude<ExtArgs> | null;
    where?: Prisma.conversationsWhereInput;
    orderBy?: Prisma.conversationsOrderByWithRelationInput | Prisma.conversationsOrderByWithRelationInput[];
    cursor?: Prisma.conversationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConversationsScalarFieldEnum | Prisma.ConversationsScalarFieldEnum[];
};
export type conversationsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversationsSelect<ExtArgs> | null;
    omit?: Prisma.conversationsOmit<ExtArgs> | null;
    include?: Prisma.conversationsInclude<ExtArgs> | null;
    where?: Prisma.conversationsWhereInput;
    orderBy?: Prisma.conversationsOrderByWithRelationInput | Prisma.conversationsOrderByWithRelationInput[];
    cursor?: Prisma.conversationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConversationsScalarFieldEnum | Prisma.ConversationsScalarFieldEnum[];
};
export type conversationsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversationsSelect<ExtArgs> | null;
    omit?: Prisma.conversationsOmit<ExtArgs> | null;
    include?: Prisma.conversationsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.conversationsCreateInput, Prisma.conversationsUncheckedCreateInput>;
};
export type conversationsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.conversationsCreateManyInput | Prisma.conversationsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type conversationsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversationsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.conversationsOmit<ExtArgs> | null;
    data: Prisma.conversationsCreateManyInput | Prisma.conversationsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.conversationsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type conversationsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversationsSelect<ExtArgs> | null;
    omit?: Prisma.conversationsOmit<ExtArgs> | null;
    include?: Prisma.conversationsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.conversationsUpdateInput, Prisma.conversationsUncheckedUpdateInput>;
    where: Prisma.conversationsWhereUniqueInput;
};
export type conversationsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.conversationsUpdateManyMutationInput, Prisma.conversationsUncheckedUpdateManyInput>;
    where?: Prisma.conversationsWhereInput;
    limit?: number;
};
export type conversationsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversationsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.conversationsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.conversationsUpdateManyMutationInput, Prisma.conversationsUncheckedUpdateManyInput>;
    where?: Prisma.conversationsWhereInput;
    limit?: number;
    include?: Prisma.conversationsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type conversationsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversationsSelect<ExtArgs> | null;
    omit?: Prisma.conversationsOmit<ExtArgs> | null;
    include?: Prisma.conversationsInclude<ExtArgs> | null;
    where: Prisma.conversationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.conversationsCreateInput, Prisma.conversationsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.conversationsUpdateInput, Prisma.conversationsUncheckedUpdateInput>;
};
export type conversationsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversationsSelect<ExtArgs> | null;
    omit?: Prisma.conversationsOmit<ExtArgs> | null;
    include?: Prisma.conversationsInclude<ExtArgs> | null;
    where: Prisma.conversationsWhereUniqueInput;
};
export type conversationsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.conversationsWhereInput;
    limit?: number;
};
export type conversationsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversationsSelect<ExtArgs> | null;
    omit?: Prisma.conversationsOmit<ExtArgs> | null;
    include?: Prisma.conversationsInclude<ExtArgs> | null;
};
