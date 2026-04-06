import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type skin_profilesModel = runtime.Types.Result.DefaultSelection<Prisma.$skin_profilesPayload>;
export type AggregateSkin_profiles = {
    _count: Skin_profilesCountAggregateOutputType | null;
    _min: Skin_profilesMinAggregateOutputType | null;
    _max: Skin_profilesMaxAggregateOutputType | null;
};
export type Skin_profilesMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    skin_type: $Enums.skin_type | null;
    notes: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Skin_profilesMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    skin_type: $Enums.skin_type | null;
    notes: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Skin_profilesCountAggregateOutputType = {
    id: number;
    user_id: number;
    skin_type: number;
    concerns: number;
    allergies: number;
    notes: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Skin_profilesMinAggregateInputType = {
    id?: true;
    user_id?: true;
    skin_type?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
};
export type Skin_profilesMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    skin_type?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
};
export type Skin_profilesCountAggregateInputType = {
    id?: true;
    user_id?: true;
    skin_type?: true;
    concerns?: true;
    allergies?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Skin_profilesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.skin_profilesWhereInput;
    orderBy?: Prisma.skin_profilesOrderByWithRelationInput | Prisma.skin_profilesOrderByWithRelationInput[];
    cursor?: Prisma.skin_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Skin_profilesCountAggregateInputType;
    _min?: Skin_profilesMinAggregateInputType;
    _max?: Skin_profilesMaxAggregateInputType;
};
export type GetSkin_profilesAggregateType<T extends Skin_profilesAggregateArgs> = {
    [P in keyof T & keyof AggregateSkin_profiles]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSkin_profiles[P]> : Prisma.GetScalarType<T[P], AggregateSkin_profiles[P]>;
};
export type skin_profilesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.skin_profilesWhereInput;
    orderBy?: Prisma.skin_profilesOrderByWithAggregationInput | Prisma.skin_profilesOrderByWithAggregationInput[];
    by: Prisma.Skin_profilesScalarFieldEnum[] | Prisma.Skin_profilesScalarFieldEnum;
    having?: Prisma.skin_profilesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Skin_profilesCountAggregateInputType | true;
    _min?: Skin_profilesMinAggregateInputType;
    _max?: Skin_profilesMaxAggregateInputType;
};
export type Skin_profilesGroupByOutputType = {
    id: string;
    user_id: string;
    skin_type: $Enums.skin_type;
    concerns: string[];
    allergies: string[];
    notes: string | null;
    created_at: Date;
    updated_at: Date;
    _count: Skin_profilesCountAggregateOutputType | null;
    _min: Skin_profilesMinAggregateOutputType | null;
    _max: Skin_profilesMaxAggregateOutputType | null;
};
type GetSkin_profilesGroupByPayload<T extends skin_profilesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Skin_profilesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Skin_profilesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Skin_profilesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Skin_profilesGroupByOutputType[P]>;
}>>;
export type skin_profilesWhereInput = {
    AND?: Prisma.skin_profilesWhereInput | Prisma.skin_profilesWhereInput[];
    OR?: Prisma.skin_profilesWhereInput[];
    NOT?: Prisma.skin_profilesWhereInput | Prisma.skin_profilesWhereInput[];
    id?: Prisma.UuidFilter<"skin_profiles"> | string;
    user_id?: Prisma.UuidFilter<"skin_profiles"> | string;
    skin_type?: Prisma.Enumskin_typeFilter<"skin_profiles"> | $Enums.skin_type;
    concerns?: Prisma.StringNullableListFilter<"skin_profiles">;
    allergies?: Prisma.StringNullableListFilter<"skin_profiles">;
    notes?: Prisma.StringNullableFilter<"skin_profiles"> | string | null;
    created_at?: Prisma.DateTimeFilter<"skin_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"skin_profiles"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type skin_profilesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    skin_type?: Prisma.SortOrder;
    concerns?: Prisma.SortOrder;
    allergies?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type skin_profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user_id?: string;
    AND?: Prisma.skin_profilesWhereInput | Prisma.skin_profilesWhereInput[];
    OR?: Prisma.skin_profilesWhereInput[];
    NOT?: Prisma.skin_profilesWhereInput | Prisma.skin_profilesWhereInput[];
    skin_type?: Prisma.Enumskin_typeFilter<"skin_profiles"> | $Enums.skin_type;
    concerns?: Prisma.StringNullableListFilter<"skin_profiles">;
    allergies?: Prisma.StringNullableListFilter<"skin_profiles">;
    notes?: Prisma.StringNullableFilter<"skin_profiles"> | string | null;
    created_at?: Prisma.DateTimeFilter<"skin_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"skin_profiles"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id" | "user_id">;
export type skin_profilesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    skin_type?: Prisma.SortOrder;
    concerns?: Prisma.SortOrder;
    allergies?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.skin_profilesCountOrderByAggregateInput;
    _max?: Prisma.skin_profilesMaxOrderByAggregateInput;
    _min?: Prisma.skin_profilesMinOrderByAggregateInput;
};
export type skin_profilesScalarWhereWithAggregatesInput = {
    AND?: Prisma.skin_profilesScalarWhereWithAggregatesInput | Prisma.skin_profilesScalarWhereWithAggregatesInput[];
    OR?: Prisma.skin_profilesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.skin_profilesScalarWhereWithAggregatesInput | Prisma.skin_profilesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"skin_profiles"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"skin_profiles"> | string;
    skin_type?: Prisma.Enumskin_typeWithAggregatesFilter<"skin_profiles"> | $Enums.skin_type;
    concerns?: Prisma.StringNullableListFilter<"skin_profiles">;
    allergies?: Prisma.StringNullableListFilter<"skin_profiles">;
    notes?: Prisma.StringNullableWithAggregatesFilter<"skin_profiles"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"skin_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"skin_profiles"> | Date | string;
};
export type skin_profilesCreateInput = {
    id?: string;
    skin_type: $Enums.skin_type;
    concerns?: Prisma.skin_profilesCreateconcernsInput | string[];
    allergies?: Prisma.skin_profilesCreateallergiesInput | string[];
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    users: Prisma.usersCreateNestedOneWithoutSkin_profilesInput;
};
export type skin_profilesUncheckedCreateInput = {
    id?: string;
    user_id: string;
    skin_type: $Enums.skin_type;
    concerns?: Prisma.skin_profilesCreateconcernsInput | string[];
    allergies?: Prisma.skin_profilesCreateallergiesInput | string[];
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type skin_profilesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    skin_type?: Prisma.Enumskin_typeFieldUpdateOperationsInput | $Enums.skin_type;
    concerns?: Prisma.skin_profilesUpdateconcernsInput | string[];
    allergies?: Prisma.skin_profilesUpdateallergiesInput | string[];
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneRequiredWithoutSkin_profilesNestedInput;
};
export type skin_profilesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    skin_type?: Prisma.Enumskin_typeFieldUpdateOperationsInput | $Enums.skin_type;
    concerns?: Prisma.skin_profilesUpdateconcernsInput | string[];
    allergies?: Prisma.skin_profilesUpdateallergiesInput | string[];
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type skin_profilesCreateManyInput = {
    id?: string;
    user_id: string;
    skin_type: $Enums.skin_type;
    concerns?: Prisma.skin_profilesCreateconcernsInput | string[];
    allergies?: Prisma.skin_profilesCreateallergiesInput | string[];
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type skin_profilesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    skin_type?: Prisma.Enumskin_typeFieldUpdateOperationsInput | $Enums.skin_type;
    concerns?: Prisma.skin_profilesUpdateconcernsInput | string[];
    allergies?: Prisma.skin_profilesUpdateallergiesInput | string[];
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type skin_profilesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    skin_type?: Prisma.Enumskin_typeFieldUpdateOperationsInput | $Enums.skin_type;
    concerns?: Prisma.skin_profilesUpdateconcernsInput | string[];
    allergies?: Prisma.skin_profilesUpdateallergiesInput | string[];
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type skin_profilesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    skin_type?: Prisma.SortOrder;
    concerns?: Prisma.SortOrder;
    allergies?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type skin_profilesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    skin_type?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type skin_profilesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    skin_type?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type Skin_profilesNullableScalarRelationFilter = {
    is?: Prisma.skin_profilesWhereInput | null;
    isNot?: Prisma.skin_profilesWhereInput | null;
};
export type skin_profilesCreateconcernsInput = {
    set: string[];
};
export type skin_profilesCreateallergiesInput = {
    set: string[];
};
export type Enumskin_typeFieldUpdateOperationsInput = {
    set?: $Enums.skin_type;
};
export type skin_profilesUpdateconcernsInput = {
    set?: string[];
    push?: string | string[];
};
export type skin_profilesUpdateallergiesInput = {
    set?: string[];
    push?: string | string[];
};
export type skin_profilesCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.skin_profilesCreateWithoutUsersInput, Prisma.skin_profilesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.skin_profilesCreateOrConnectWithoutUsersInput;
    connect?: Prisma.skin_profilesWhereUniqueInput;
};
export type skin_profilesUncheckedCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.skin_profilesCreateWithoutUsersInput, Prisma.skin_profilesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.skin_profilesCreateOrConnectWithoutUsersInput;
    connect?: Prisma.skin_profilesWhereUniqueInput;
};
export type skin_profilesUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.skin_profilesCreateWithoutUsersInput, Prisma.skin_profilesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.skin_profilesCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.skin_profilesUpsertWithoutUsersInput;
    disconnect?: Prisma.skin_profilesWhereInput | boolean;
    delete?: Prisma.skin_profilesWhereInput | boolean;
    connect?: Prisma.skin_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.skin_profilesUpdateToOneWithWhereWithoutUsersInput, Prisma.skin_profilesUpdateWithoutUsersInput>, Prisma.skin_profilesUncheckedUpdateWithoutUsersInput>;
};
export type skin_profilesUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.skin_profilesCreateWithoutUsersInput, Prisma.skin_profilesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.skin_profilesCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.skin_profilesUpsertWithoutUsersInput;
    disconnect?: Prisma.skin_profilesWhereInput | boolean;
    delete?: Prisma.skin_profilesWhereInput | boolean;
    connect?: Prisma.skin_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.skin_profilesUpdateToOneWithWhereWithoutUsersInput, Prisma.skin_profilesUpdateWithoutUsersInput>, Prisma.skin_profilesUncheckedUpdateWithoutUsersInput>;
};
export type skin_profilesCreateWithoutUsersInput = {
    id?: string;
    skin_type: $Enums.skin_type;
    concerns?: Prisma.skin_profilesCreateconcernsInput | string[];
    allergies?: Prisma.skin_profilesCreateallergiesInput | string[];
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type skin_profilesUncheckedCreateWithoutUsersInput = {
    id?: string;
    skin_type: $Enums.skin_type;
    concerns?: Prisma.skin_profilesCreateconcernsInput | string[];
    allergies?: Prisma.skin_profilesCreateallergiesInput | string[];
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type skin_profilesCreateOrConnectWithoutUsersInput = {
    where: Prisma.skin_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.skin_profilesCreateWithoutUsersInput, Prisma.skin_profilesUncheckedCreateWithoutUsersInput>;
};
export type skin_profilesUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.skin_profilesUpdateWithoutUsersInput, Prisma.skin_profilesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.skin_profilesCreateWithoutUsersInput, Prisma.skin_profilesUncheckedCreateWithoutUsersInput>;
    where?: Prisma.skin_profilesWhereInput;
};
export type skin_profilesUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.skin_profilesWhereInput;
    data: Prisma.XOR<Prisma.skin_profilesUpdateWithoutUsersInput, Prisma.skin_profilesUncheckedUpdateWithoutUsersInput>;
};
export type skin_profilesUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    skin_type?: Prisma.Enumskin_typeFieldUpdateOperationsInput | $Enums.skin_type;
    concerns?: Prisma.skin_profilesUpdateconcernsInput | string[];
    allergies?: Prisma.skin_profilesUpdateallergiesInput | string[];
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type skin_profilesUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    skin_type?: Prisma.Enumskin_typeFieldUpdateOperationsInput | $Enums.skin_type;
    concerns?: Prisma.skin_profilesUpdateconcernsInput | string[];
    allergies?: Prisma.skin_profilesUpdateallergiesInput | string[];
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type skin_profilesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    skin_type?: boolean;
    concerns?: boolean;
    allergies?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["skin_profiles"]>;
export type skin_profilesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    skin_type?: boolean;
    concerns?: boolean;
    allergies?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["skin_profiles"]>;
export type skin_profilesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    skin_type?: boolean;
    concerns?: boolean;
    allergies?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["skin_profiles"]>;
export type skin_profilesSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    skin_type?: boolean;
    concerns?: boolean;
    allergies?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type skin_profilesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "skin_type" | "concerns" | "allergies" | "notes" | "created_at" | "updated_at", ExtArgs["result"]["skin_profiles"]>;
export type skin_profilesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type skin_profilesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type skin_profilesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $skin_profilesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "skin_profiles";
    objects: {
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        skin_type: $Enums.skin_type;
        concerns: string[];
        allergies: string[];
        notes: string | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["skin_profiles"]>;
    composites: {};
};
export type skin_profilesGetPayload<S extends boolean | null | undefined | skin_profilesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$skin_profilesPayload, S>;
export type skin_profilesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<skin_profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Skin_profilesCountAggregateInputType | true;
};
export interface skin_profilesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['skin_profiles'];
        meta: {
            name: 'skin_profiles';
        };
    };
    findUnique<T extends skin_profilesFindUniqueArgs>(args: Prisma.SelectSubset<T, skin_profilesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__skin_profilesClient<runtime.Types.Result.GetResult<Prisma.$skin_profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends skin_profilesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, skin_profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__skin_profilesClient<runtime.Types.Result.GetResult<Prisma.$skin_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends skin_profilesFindFirstArgs>(args?: Prisma.SelectSubset<T, skin_profilesFindFirstArgs<ExtArgs>>): Prisma.Prisma__skin_profilesClient<runtime.Types.Result.GetResult<Prisma.$skin_profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends skin_profilesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, skin_profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__skin_profilesClient<runtime.Types.Result.GetResult<Prisma.$skin_profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends skin_profilesFindManyArgs>(args?: Prisma.SelectSubset<T, skin_profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$skin_profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends skin_profilesCreateArgs>(args: Prisma.SelectSubset<T, skin_profilesCreateArgs<ExtArgs>>): Prisma.Prisma__skin_profilesClient<runtime.Types.Result.GetResult<Prisma.$skin_profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends skin_profilesCreateManyArgs>(args?: Prisma.SelectSubset<T, skin_profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends skin_profilesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, skin_profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$skin_profilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends skin_profilesDeleteArgs>(args: Prisma.SelectSubset<T, skin_profilesDeleteArgs<ExtArgs>>): Prisma.Prisma__skin_profilesClient<runtime.Types.Result.GetResult<Prisma.$skin_profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends skin_profilesUpdateArgs>(args: Prisma.SelectSubset<T, skin_profilesUpdateArgs<ExtArgs>>): Prisma.Prisma__skin_profilesClient<runtime.Types.Result.GetResult<Prisma.$skin_profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends skin_profilesDeleteManyArgs>(args?: Prisma.SelectSubset<T, skin_profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends skin_profilesUpdateManyArgs>(args: Prisma.SelectSubset<T, skin_profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends skin_profilesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, skin_profilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$skin_profilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends skin_profilesUpsertArgs>(args: Prisma.SelectSubset<T, skin_profilesUpsertArgs<ExtArgs>>): Prisma.Prisma__skin_profilesClient<runtime.Types.Result.GetResult<Prisma.$skin_profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends skin_profilesCountArgs>(args?: Prisma.Subset<T, skin_profilesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Skin_profilesCountAggregateOutputType> : number>;
    aggregate<T extends Skin_profilesAggregateArgs>(args: Prisma.Subset<T, Skin_profilesAggregateArgs>): Prisma.PrismaPromise<GetSkin_profilesAggregateType<T>>;
    groupBy<T extends skin_profilesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: skin_profilesGroupByArgs['orderBy'];
    } : {
        orderBy?: skin_profilesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, skin_profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkin_profilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: skin_profilesFieldRefs;
}
export interface Prisma__skin_profilesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface skin_profilesFieldRefs {
    readonly id: Prisma.FieldRef<"skin_profiles", 'String'>;
    readonly user_id: Prisma.FieldRef<"skin_profiles", 'String'>;
    readonly skin_type: Prisma.FieldRef<"skin_profiles", 'skin_type'>;
    readonly concerns: Prisma.FieldRef<"skin_profiles", 'String[]'>;
    readonly allergies: Prisma.FieldRef<"skin_profiles", 'String[]'>;
    readonly notes: Prisma.FieldRef<"skin_profiles", 'String'>;
    readonly created_at: Prisma.FieldRef<"skin_profiles", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"skin_profiles", 'DateTime'>;
}
export type skin_profilesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.skin_profilesSelect<ExtArgs> | null;
    omit?: Prisma.skin_profilesOmit<ExtArgs> | null;
    include?: Prisma.skin_profilesInclude<ExtArgs> | null;
    where: Prisma.skin_profilesWhereUniqueInput;
};
export type skin_profilesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.skin_profilesSelect<ExtArgs> | null;
    omit?: Prisma.skin_profilesOmit<ExtArgs> | null;
    include?: Prisma.skin_profilesInclude<ExtArgs> | null;
    where: Prisma.skin_profilesWhereUniqueInput;
};
export type skin_profilesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.skin_profilesSelect<ExtArgs> | null;
    omit?: Prisma.skin_profilesOmit<ExtArgs> | null;
    include?: Prisma.skin_profilesInclude<ExtArgs> | null;
    where?: Prisma.skin_profilesWhereInput;
    orderBy?: Prisma.skin_profilesOrderByWithRelationInput | Prisma.skin_profilesOrderByWithRelationInput[];
    cursor?: Prisma.skin_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Skin_profilesScalarFieldEnum | Prisma.Skin_profilesScalarFieldEnum[];
};
export type skin_profilesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.skin_profilesSelect<ExtArgs> | null;
    omit?: Prisma.skin_profilesOmit<ExtArgs> | null;
    include?: Prisma.skin_profilesInclude<ExtArgs> | null;
    where?: Prisma.skin_profilesWhereInput;
    orderBy?: Prisma.skin_profilesOrderByWithRelationInput | Prisma.skin_profilesOrderByWithRelationInput[];
    cursor?: Prisma.skin_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Skin_profilesScalarFieldEnum | Prisma.Skin_profilesScalarFieldEnum[];
};
export type skin_profilesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.skin_profilesSelect<ExtArgs> | null;
    omit?: Prisma.skin_profilesOmit<ExtArgs> | null;
    include?: Prisma.skin_profilesInclude<ExtArgs> | null;
    where?: Prisma.skin_profilesWhereInput;
    orderBy?: Prisma.skin_profilesOrderByWithRelationInput | Prisma.skin_profilesOrderByWithRelationInput[];
    cursor?: Prisma.skin_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Skin_profilesScalarFieldEnum | Prisma.Skin_profilesScalarFieldEnum[];
};
export type skin_profilesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.skin_profilesSelect<ExtArgs> | null;
    omit?: Prisma.skin_profilesOmit<ExtArgs> | null;
    include?: Prisma.skin_profilesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.skin_profilesCreateInput, Prisma.skin_profilesUncheckedCreateInput>;
};
export type skin_profilesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.skin_profilesCreateManyInput | Prisma.skin_profilesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type skin_profilesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.skin_profilesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.skin_profilesOmit<ExtArgs> | null;
    data: Prisma.skin_profilesCreateManyInput | Prisma.skin_profilesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.skin_profilesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type skin_profilesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.skin_profilesSelect<ExtArgs> | null;
    omit?: Prisma.skin_profilesOmit<ExtArgs> | null;
    include?: Prisma.skin_profilesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.skin_profilesUpdateInput, Prisma.skin_profilesUncheckedUpdateInput>;
    where: Prisma.skin_profilesWhereUniqueInput;
};
export type skin_profilesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.skin_profilesUpdateManyMutationInput, Prisma.skin_profilesUncheckedUpdateManyInput>;
    where?: Prisma.skin_profilesWhereInput;
    limit?: number;
};
export type skin_profilesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.skin_profilesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.skin_profilesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.skin_profilesUpdateManyMutationInput, Prisma.skin_profilesUncheckedUpdateManyInput>;
    where?: Prisma.skin_profilesWhereInput;
    limit?: number;
    include?: Prisma.skin_profilesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type skin_profilesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.skin_profilesSelect<ExtArgs> | null;
    omit?: Prisma.skin_profilesOmit<ExtArgs> | null;
    include?: Prisma.skin_profilesInclude<ExtArgs> | null;
    where: Prisma.skin_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.skin_profilesCreateInput, Prisma.skin_profilesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.skin_profilesUpdateInput, Prisma.skin_profilesUncheckedUpdateInput>;
};
export type skin_profilesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.skin_profilesSelect<ExtArgs> | null;
    omit?: Prisma.skin_profilesOmit<ExtArgs> | null;
    include?: Prisma.skin_profilesInclude<ExtArgs> | null;
    where: Prisma.skin_profilesWhereUniqueInput;
};
export type skin_profilesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.skin_profilesWhereInput;
    limit?: number;
};
export type skin_profilesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.skin_profilesSelect<ExtArgs> | null;
    omit?: Prisma.skin_profilesOmit<ExtArgs> | null;
    include?: Prisma.skin_profilesInclude<ExtArgs> | null;
};
export {};
