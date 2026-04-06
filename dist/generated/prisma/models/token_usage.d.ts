import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type token_usageModel = runtime.Types.Result.DefaultSelection<Prisma.$token_usagePayload>;
export type AggregateToken_usage = {
    _count: Token_usageCountAggregateOutputType | null;
    _avg: Token_usageAvgAggregateOutputType | null;
    _sum: Token_usageSumAggregateOutputType | null;
    _min: Token_usageMinAggregateOutputType | null;
    _max: Token_usageMaxAggregateOutputType | null;
};
export type Token_usageAvgAggregateOutputType = {
    tokens_input: number | null;
    tokens_output: number | null;
    tokens_total: number | null;
    cost_usd: runtime.Decimal | null;
};
export type Token_usageSumAggregateOutputType = {
    tokens_input: number | null;
    tokens_output: number | null;
    tokens_total: number | null;
    cost_usd: runtime.Decimal | null;
};
export type Token_usageMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    source: $Enums.token_source | null;
    ref_id: string | null;
    tokens_input: number | null;
    tokens_output: number | null;
    tokens_total: number | null;
    ai_model: string | null;
    cost_usd: runtime.Decimal | null;
    created_at: Date | null;
    plan_id: string | null;
};
export type Token_usageMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    source: $Enums.token_source | null;
    ref_id: string | null;
    tokens_input: number | null;
    tokens_output: number | null;
    tokens_total: number | null;
    ai_model: string | null;
    cost_usd: runtime.Decimal | null;
    created_at: Date | null;
    plan_id: string | null;
};
export type Token_usageCountAggregateOutputType = {
    id: number;
    user_id: number;
    source: number;
    ref_id: number;
    tokens_input: number;
    tokens_output: number;
    tokens_total: number;
    ai_model: number;
    cost_usd: number;
    created_at: number;
    plan_id: number;
    _all: number;
};
export type Token_usageAvgAggregateInputType = {
    tokens_input?: true;
    tokens_output?: true;
    tokens_total?: true;
    cost_usd?: true;
};
export type Token_usageSumAggregateInputType = {
    tokens_input?: true;
    tokens_output?: true;
    tokens_total?: true;
    cost_usd?: true;
};
export type Token_usageMinAggregateInputType = {
    id?: true;
    user_id?: true;
    source?: true;
    ref_id?: true;
    tokens_input?: true;
    tokens_output?: true;
    tokens_total?: true;
    ai_model?: true;
    cost_usd?: true;
    created_at?: true;
    plan_id?: true;
};
export type Token_usageMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    source?: true;
    ref_id?: true;
    tokens_input?: true;
    tokens_output?: true;
    tokens_total?: true;
    ai_model?: true;
    cost_usd?: true;
    created_at?: true;
    plan_id?: true;
};
export type Token_usageCountAggregateInputType = {
    id?: true;
    user_id?: true;
    source?: true;
    ref_id?: true;
    tokens_input?: true;
    tokens_output?: true;
    tokens_total?: true;
    ai_model?: true;
    cost_usd?: true;
    created_at?: true;
    plan_id?: true;
    _all?: true;
};
export type Token_usageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.token_usageWhereInput;
    orderBy?: Prisma.token_usageOrderByWithRelationInput | Prisma.token_usageOrderByWithRelationInput[];
    cursor?: Prisma.token_usageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Token_usageCountAggregateInputType;
    _avg?: Token_usageAvgAggregateInputType;
    _sum?: Token_usageSumAggregateInputType;
    _min?: Token_usageMinAggregateInputType;
    _max?: Token_usageMaxAggregateInputType;
};
export type GetToken_usageAggregateType<T extends Token_usageAggregateArgs> = {
    [P in keyof T & keyof AggregateToken_usage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateToken_usage[P]> : Prisma.GetScalarType<T[P], AggregateToken_usage[P]>;
};
export type token_usageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.token_usageWhereInput;
    orderBy?: Prisma.token_usageOrderByWithAggregationInput | Prisma.token_usageOrderByWithAggregationInput[];
    by: Prisma.Token_usageScalarFieldEnum[] | Prisma.Token_usageScalarFieldEnum;
    having?: Prisma.token_usageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Token_usageCountAggregateInputType | true;
    _avg?: Token_usageAvgAggregateInputType;
    _sum?: Token_usageSumAggregateInputType;
    _min?: Token_usageMinAggregateInputType;
    _max?: Token_usageMaxAggregateInputType;
};
export type Token_usageGroupByOutputType = {
    id: string;
    user_id: string;
    source: $Enums.token_source;
    ref_id: string | null;
    tokens_input: number | null;
    tokens_output: number | null;
    tokens_total: number | null;
    ai_model: string | null;
    cost_usd: runtime.Decimal | null;
    created_at: Date | null;
    plan_id: string | null;
    _count: Token_usageCountAggregateOutputType | null;
    _avg: Token_usageAvgAggregateOutputType | null;
    _sum: Token_usageSumAggregateOutputType | null;
    _min: Token_usageMinAggregateOutputType | null;
    _max: Token_usageMaxAggregateOutputType | null;
};
type GetToken_usageGroupByPayload<T extends token_usageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Token_usageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Token_usageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Token_usageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Token_usageGroupByOutputType[P]>;
}>>;
export type token_usageWhereInput = {
    AND?: Prisma.token_usageWhereInput | Prisma.token_usageWhereInput[];
    OR?: Prisma.token_usageWhereInput[];
    NOT?: Prisma.token_usageWhereInput | Prisma.token_usageWhereInput[];
    id?: Prisma.UuidFilter<"token_usage"> | string;
    user_id?: Prisma.UuidFilter<"token_usage"> | string;
    source?: Prisma.Enumtoken_sourceFilter<"token_usage"> | $Enums.token_source;
    ref_id?: Prisma.UuidNullableFilter<"token_usage"> | string | null;
    tokens_input?: Prisma.IntNullableFilter<"token_usage"> | number | null;
    tokens_output?: Prisma.IntNullableFilter<"token_usage"> | number | null;
    tokens_total?: Prisma.IntNullableFilter<"token_usage"> | number | null;
    ai_model?: Prisma.StringNullableFilter<"token_usage"> | string | null;
    cost_usd?: Prisma.DecimalNullableFilter<"token_usage"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"token_usage"> | Date | string | null;
    plan_id?: Prisma.UuidNullableFilter<"token_usage"> | string | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    treatment_plans?: Prisma.XOR<Prisma.Treatment_plansNullableScalarRelationFilter, Prisma.treatment_plansWhereInput> | null;
};
export type token_usageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    ref_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    tokens_input?: Prisma.SortOrderInput | Prisma.SortOrder;
    tokens_output?: Prisma.SortOrderInput | Prisma.SortOrder;
    tokens_total?: Prisma.SortOrderInput | Prisma.SortOrder;
    ai_model?: Prisma.SortOrderInput | Prisma.SortOrder;
    cost_usd?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    plan_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    treatment_plans?: Prisma.treatment_plansOrderByWithRelationInput;
};
export type token_usageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.token_usageWhereInput | Prisma.token_usageWhereInput[];
    OR?: Prisma.token_usageWhereInput[];
    NOT?: Prisma.token_usageWhereInput | Prisma.token_usageWhereInput[];
    user_id?: Prisma.UuidFilter<"token_usage"> | string;
    source?: Prisma.Enumtoken_sourceFilter<"token_usage"> | $Enums.token_source;
    ref_id?: Prisma.UuidNullableFilter<"token_usage"> | string | null;
    tokens_input?: Prisma.IntNullableFilter<"token_usage"> | number | null;
    tokens_output?: Prisma.IntNullableFilter<"token_usage"> | number | null;
    tokens_total?: Prisma.IntNullableFilter<"token_usage"> | number | null;
    ai_model?: Prisma.StringNullableFilter<"token_usage"> | string | null;
    cost_usd?: Prisma.DecimalNullableFilter<"token_usage"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"token_usage"> | Date | string | null;
    plan_id?: Prisma.UuidNullableFilter<"token_usage"> | string | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    treatment_plans?: Prisma.XOR<Prisma.Treatment_plansNullableScalarRelationFilter, Prisma.treatment_plansWhereInput> | null;
}, "id">;
export type token_usageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    ref_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    tokens_input?: Prisma.SortOrderInput | Prisma.SortOrder;
    tokens_output?: Prisma.SortOrderInput | Prisma.SortOrder;
    tokens_total?: Prisma.SortOrderInput | Prisma.SortOrder;
    ai_model?: Prisma.SortOrderInput | Prisma.SortOrder;
    cost_usd?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    plan_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.token_usageCountOrderByAggregateInput;
    _avg?: Prisma.token_usageAvgOrderByAggregateInput;
    _max?: Prisma.token_usageMaxOrderByAggregateInput;
    _min?: Prisma.token_usageMinOrderByAggregateInput;
    _sum?: Prisma.token_usageSumOrderByAggregateInput;
};
export type token_usageScalarWhereWithAggregatesInput = {
    AND?: Prisma.token_usageScalarWhereWithAggregatesInput | Prisma.token_usageScalarWhereWithAggregatesInput[];
    OR?: Prisma.token_usageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.token_usageScalarWhereWithAggregatesInput | Prisma.token_usageScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"token_usage"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"token_usage"> | string;
    source?: Prisma.Enumtoken_sourceWithAggregatesFilter<"token_usage"> | $Enums.token_source;
    ref_id?: Prisma.UuidNullableWithAggregatesFilter<"token_usage"> | string | null;
    tokens_input?: Prisma.IntNullableWithAggregatesFilter<"token_usage"> | number | null;
    tokens_output?: Prisma.IntNullableWithAggregatesFilter<"token_usage"> | number | null;
    tokens_total?: Prisma.IntNullableWithAggregatesFilter<"token_usage"> | number | null;
    ai_model?: Prisma.StringNullableWithAggregatesFilter<"token_usage"> | string | null;
    cost_usd?: Prisma.DecimalNullableWithAggregatesFilter<"token_usage"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"token_usage"> | Date | string | null;
    plan_id?: Prisma.UuidNullableWithAggregatesFilter<"token_usage"> | string | null;
};
export type token_usageCreateInput = {
    id?: string;
    source: $Enums.token_source;
    ref_id?: string | null;
    tokens_input?: number | null;
    tokens_output?: number | null;
    tokens_total?: number | null;
    ai_model?: string | null;
    cost_usd?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    users: Prisma.usersCreateNestedOneWithoutToken_usageInput;
    treatment_plans?: Prisma.treatment_plansCreateNestedOneWithoutToken_usageInput;
};
export type token_usageUncheckedCreateInput = {
    id?: string;
    user_id: string;
    source: $Enums.token_source;
    ref_id?: string | null;
    tokens_input?: number | null;
    tokens_output?: number | null;
    tokens_total?: number | null;
    ai_model?: string | null;
    cost_usd?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    plan_id?: string | null;
};
export type token_usageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.Enumtoken_sourceFieldUpdateOperationsInput | $Enums.token_source;
    ref_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokens_input?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokens_output?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokens_total?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ai_model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost_usd?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneRequiredWithoutToken_usageNestedInput;
    treatment_plans?: Prisma.treatment_plansUpdateOneWithoutToken_usageNestedInput;
};
export type token_usageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.Enumtoken_sourceFieldUpdateOperationsInput | $Enums.token_source;
    ref_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokens_input?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokens_output?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokens_total?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ai_model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost_usd?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    plan_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type token_usageCreateManyInput = {
    id?: string;
    user_id: string;
    source: $Enums.token_source;
    ref_id?: string | null;
    tokens_input?: number | null;
    tokens_output?: number | null;
    tokens_total?: number | null;
    ai_model?: string | null;
    cost_usd?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    plan_id?: string | null;
};
export type token_usageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.Enumtoken_sourceFieldUpdateOperationsInput | $Enums.token_source;
    ref_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokens_input?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokens_output?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokens_total?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ai_model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost_usd?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type token_usageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.Enumtoken_sourceFieldUpdateOperationsInput | $Enums.token_source;
    ref_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokens_input?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokens_output?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokens_total?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ai_model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost_usd?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    plan_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Token_usageListRelationFilter = {
    every?: Prisma.token_usageWhereInput;
    some?: Prisma.token_usageWhereInput;
    none?: Prisma.token_usageWhereInput;
};
export type token_usageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type token_usageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    ref_id?: Prisma.SortOrder;
    tokens_input?: Prisma.SortOrder;
    tokens_output?: Prisma.SortOrder;
    tokens_total?: Prisma.SortOrder;
    ai_model?: Prisma.SortOrder;
    cost_usd?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    plan_id?: Prisma.SortOrder;
};
export type token_usageAvgOrderByAggregateInput = {
    tokens_input?: Prisma.SortOrder;
    tokens_output?: Prisma.SortOrder;
    tokens_total?: Prisma.SortOrder;
    cost_usd?: Prisma.SortOrder;
};
export type token_usageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    ref_id?: Prisma.SortOrder;
    tokens_input?: Prisma.SortOrder;
    tokens_output?: Prisma.SortOrder;
    tokens_total?: Prisma.SortOrder;
    ai_model?: Prisma.SortOrder;
    cost_usd?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    plan_id?: Prisma.SortOrder;
};
export type token_usageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    ref_id?: Prisma.SortOrder;
    tokens_input?: Prisma.SortOrder;
    tokens_output?: Prisma.SortOrder;
    tokens_total?: Prisma.SortOrder;
    ai_model?: Prisma.SortOrder;
    cost_usd?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    plan_id?: Prisma.SortOrder;
};
export type token_usageSumOrderByAggregateInput = {
    tokens_input?: Prisma.SortOrder;
    tokens_output?: Prisma.SortOrder;
    tokens_total?: Prisma.SortOrder;
    cost_usd?: Prisma.SortOrder;
};
export type token_usageCreateNestedManyWithoutTreatment_plansInput = {
    create?: Prisma.XOR<Prisma.token_usageCreateWithoutTreatment_plansInput, Prisma.token_usageUncheckedCreateWithoutTreatment_plansInput> | Prisma.token_usageCreateWithoutTreatment_plansInput[] | Prisma.token_usageUncheckedCreateWithoutTreatment_plansInput[];
    connectOrCreate?: Prisma.token_usageCreateOrConnectWithoutTreatment_plansInput | Prisma.token_usageCreateOrConnectWithoutTreatment_plansInput[];
    createMany?: Prisma.token_usageCreateManyTreatment_plansInputEnvelope;
    connect?: Prisma.token_usageWhereUniqueInput | Prisma.token_usageWhereUniqueInput[];
};
export type token_usageUncheckedCreateNestedManyWithoutTreatment_plansInput = {
    create?: Prisma.XOR<Prisma.token_usageCreateWithoutTreatment_plansInput, Prisma.token_usageUncheckedCreateWithoutTreatment_plansInput> | Prisma.token_usageCreateWithoutTreatment_plansInput[] | Prisma.token_usageUncheckedCreateWithoutTreatment_plansInput[];
    connectOrCreate?: Prisma.token_usageCreateOrConnectWithoutTreatment_plansInput | Prisma.token_usageCreateOrConnectWithoutTreatment_plansInput[];
    createMany?: Prisma.token_usageCreateManyTreatment_plansInputEnvelope;
    connect?: Prisma.token_usageWhereUniqueInput | Prisma.token_usageWhereUniqueInput[];
};
export type token_usageUpdateManyWithoutTreatment_plansNestedInput = {
    create?: Prisma.XOR<Prisma.token_usageCreateWithoutTreatment_plansInput, Prisma.token_usageUncheckedCreateWithoutTreatment_plansInput> | Prisma.token_usageCreateWithoutTreatment_plansInput[] | Prisma.token_usageUncheckedCreateWithoutTreatment_plansInput[];
    connectOrCreate?: Prisma.token_usageCreateOrConnectWithoutTreatment_plansInput | Prisma.token_usageCreateOrConnectWithoutTreatment_plansInput[];
    upsert?: Prisma.token_usageUpsertWithWhereUniqueWithoutTreatment_plansInput | Prisma.token_usageUpsertWithWhereUniqueWithoutTreatment_plansInput[];
    createMany?: Prisma.token_usageCreateManyTreatment_plansInputEnvelope;
    set?: Prisma.token_usageWhereUniqueInput | Prisma.token_usageWhereUniqueInput[];
    disconnect?: Prisma.token_usageWhereUniqueInput | Prisma.token_usageWhereUniqueInput[];
    delete?: Prisma.token_usageWhereUniqueInput | Prisma.token_usageWhereUniqueInput[];
    connect?: Prisma.token_usageWhereUniqueInput | Prisma.token_usageWhereUniqueInput[];
    update?: Prisma.token_usageUpdateWithWhereUniqueWithoutTreatment_plansInput | Prisma.token_usageUpdateWithWhereUniqueWithoutTreatment_plansInput[];
    updateMany?: Prisma.token_usageUpdateManyWithWhereWithoutTreatment_plansInput | Prisma.token_usageUpdateManyWithWhereWithoutTreatment_plansInput[];
    deleteMany?: Prisma.token_usageScalarWhereInput | Prisma.token_usageScalarWhereInput[];
};
export type token_usageUncheckedUpdateManyWithoutTreatment_plansNestedInput = {
    create?: Prisma.XOR<Prisma.token_usageCreateWithoutTreatment_plansInput, Prisma.token_usageUncheckedCreateWithoutTreatment_plansInput> | Prisma.token_usageCreateWithoutTreatment_plansInput[] | Prisma.token_usageUncheckedCreateWithoutTreatment_plansInput[];
    connectOrCreate?: Prisma.token_usageCreateOrConnectWithoutTreatment_plansInput | Prisma.token_usageCreateOrConnectWithoutTreatment_plansInput[];
    upsert?: Prisma.token_usageUpsertWithWhereUniqueWithoutTreatment_plansInput | Prisma.token_usageUpsertWithWhereUniqueWithoutTreatment_plansInput[];
    createMany?: Prisma.token_usageCreateManyTreatment_plansInputEnvelope;
    set?: Prisma.token_usageWhereUniqueInput | Prisma.token_usageWhereUniqueInput[];
    disconnect?: Prisma.token_usageWhereUniqueInput | Prisma.token_usageWhereUniqueInput[];
    delete?: Prisma.token_usageWhereUniqueInput | Prisma.token_usageWhereUniqueInput[];
    connect?: Prisma.token_usageWhereUniqueInput | Prisma.token_usageWhereUniqueInput[];
    update?: Prisma.token_usageUpdateWithWhereUniqueWithoutTreatment_plansInput | Prisma.token_usageUpdateWithWhereUniqueWithoutTreatment_plansInput[];
    updateMany?: Prisma.token_usageUpdateManyWithWhereWithoutTreatment_plansInput | Prisma.token_usageUpdateManyWithWhereWithoutTreatment_plansInput[];
    deleteMany?: Prisma.token_usageScalarWhereInput | Prisma.token_usageScalarWhereInput[];
};
export type token_usageCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.token_usageCreateWithoutUsersInput, Prisma.token_usageUncheckedCreateWithoutUsersInput> | Prisma.token_usageCreateWithoutUsersInput[] | Prisma.token_usageUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.token_usageCreateOrConnectWithoutUsersInput | Prisma.token_usageCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.token_usageCreateManyUsersInputEnvelope;
    connect?: Prisma.token_usageWhereUniqueInput | Prisma.token_usageWhereUniqueInput[];
};
export type token_usageUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.token_usageCreateWithoutUsersInput, Prisma.token_usageUncheckedCreateWithoutUsersInput> | Prisma.token_usageCreateWithoutUsersInput[] | Prisma.token_usageUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.token_usageCreateOrConnectWithoutUsersInput | Prisma.token_usageCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.token_usageCreateManyUsersInputEnvelope;
    connect?: Prisma.token_usageWhereUniqueInput | Prisma.token_usageWhereUniqueInput[];
};
export type token_usageUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.token_usageCreateWithoutUsersInput, Prisma.token_usageUncheckedCreateWithoutUsersInput> | Prisma.token_usageCreateWithoutUsersInput[] | Prisma.token_usageUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.token_usageCreateOrConnectWithoutUsersInput | Prisma.token_usageCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.token_usageUpsertWithWhereUniqueWithoutUsersInput | Prisma.token_usageUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.token_usageCreateManyUsersInputEnvelope;
    set?: Prisma.token_usageWhereUniqueInput | Prisma.token_usageWhereUniqueInput[];
    disconnect?: Prisma.token_usageWhereUniqueInput | Prisma.token_usageWhereUniqueInput[];
    delete?: Prisma.token_usageWhereUniqueInput | Prisma.token_usageWhereUniqueInput[];
    connect?: Prisma.token_usageWhereUniqueInput | Prisma.token_usageWhereUniqueInput[];
    update?: Prisma.token_usageUpdateWithWhereUniqueWithoutUsersInput | Prisma.token_usageUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.token_usageUpdateManyWithWhereWithoutUsersInput | Prisma.token_usageUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.token_usageScalarWhereInput | Prisma.token_usageScalarWhereInput[];
};
export type token_usageUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.token_usageCreateWithoutUsersInput, Prisma.token_usageUncheckedCreateWithoutUsersInput> | Prisma.token_usageCreateWithoutUsersInput[] | Prisma.token_usageUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.token_usageCreateOrConnectWithoutUsersInput | Prisma.token_usageCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.token_usageUpsertWithWhereUniqueWithoutUsersInput | Prisma.token_usageUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.token_usageCreateManyUsersInputEnvelope;
    set?: Prisma.token_usageWhereUniqueInput | Prisma.token_usageWhereUniqueInput[];
    disconnect?: Prisma.token_usageWhereUniqueInput | Prisma.token_usageWhereUniqueInput[];
    delete?: Prisma.token_usageWhereUniqueInput | Prisma.token_usageWhereUniqueInput[];
    connect?: Prisma.token_usageWhereUniqueInput | Prisma.token_usageWhereUniqueInput[];
    update?: Prisma.token_usageUpdateWithWhereUniqueWithoutUsersInput | Prisma.token_usageUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.token_usageUpdateManyWithWhereWithoutUsersInput | Prisma.token_usageUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.token_usageScalarWhereInput | Prisma.token_usageScalarWhereInput[];
};
export type Enumtoken_sourceFieldUpdateOperationsInput = {
    set?: $Enums.token_source;
};
export type token_usageCreateWithoutTreatment_plansInput = {
    id?: string;
    source: $Enums.token_source;
    ref_id?: string | null;
    tokens_input?: number | null;
    tokens_output?: number | null;
    tokens_total?: number | null;
    ai_model?: string | null;
    cost_usd?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    users: Prisma.usersCreateNestedOneWithoutToken_usageInput;
};
export type token_usageUncheckedCreateWithoutTreatment_plansInput = {
    id?: string;
    user_id: string;
    source: $Enums.token_source;
    ref_id?: string | null;
    tokens_input?: number | null;
    tokens_output?: number | null;
    tokens_total?: number | null;
    ai_model?: string | null;
    cost_usd?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
};
export type token_usageCreateOrConnectWithoutTreatment_plansInput = {
    where: Prisma.token_usageWhereUniqueInput;
    create: Prisma.XOR<Prisma.token_usageCreateWithoutTreatment_plansInput, Prisma.token_usageUncheckedCreateWithoutTreatment_plansInput>;
};
export type token_usageCreateManyTreatment_plansInputEnvelope = {
    data: Prisma.token_usageCreateManyTreatment_plansInput | Prisma.token_usageCreateManyTreatment_plansInput[];
    skipDuplicates?: boolean;
};
export type token_usageUpsertWithWhereUniqueWithoutTreatment_plansInput = {
    where: Prisma.token_usageWhereUniqueInput;
    update: Prisma.XOR<Prisma.token_usageUpdateWithoutTreatment_plansInput, Prisma.token_usageUncheckedUpdateWithoutTreatment_plansInput>;
    create: Prisma.XOR<Prisma.token_usageCreateWithoutTreatment_plansInput, Prisma.token_usageUncheckedCreateWithoutTreatment_plansInput>;
};
export type token_usageUpdateWithWhereUniqueWithoutTreatment_plansInput = {
    where: Prisma.token_usageWhereUniqueInput;
    data: Prisma.XOR<Prisma.token_usageUpdateWithoutTreatment_plansInput, Prisma.token_usageUncheckedUpdateWithoutTreatment_plansInput>;
};
export type token_usageUpdateManyWithWhereWithoutTreatment_plansInput = {
    where: Prisma.token_usageScalarWhereInput;
    data: Prisma.XOR<Prisma.token_usageUpdateManyMutationInput, Prisma.token_usageUncheckedUpdateManyWithoutTreatment_plansInput>;
};
export type token_usageScalarWhereInput = {
    AND?: Prisma.token_usageScalarWhereInput | Prisma.token_usageScalarWhereInput[];
    OR?: Prisma.token_usageScalarWhereInput[];
    NOT?: Prisma.token_usageScalarWhereInput | Prisma.token_usageScalarWhereInput[];
    id?: Prisma.UuidFilter<"token_usage"> | string;
    user_id?: Prisma.UuidFilter<"token_usage"> | string;
    source?: Prisma.Enumtoken_sourceFilter<"token_usage"> | $Enums.token_source;
    ref_id?: Prisma.UuidNullableFilter<"token_usage"> | string | null;
    tokens_input?: Prisma.IntNullableFilter<"token_usage"> | number | null;
    tokens_output?: Prisma.IntNullableFilter<"token_usage"> | number | null;
    tokens_total?: Prisma.IntNullableFilter<"token_usage"> | number | null;
    ai_model?: Prisma.StringNullableFilter<"token_usage"> | string | null;
    cost_usd?: Prisma.DecimalNullableFilter<"token_usage"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"token_usage"> | Date | string | null;
    plan_id?: Prisma.UuidNullableFilter<"token_usage"> | string | null;
};
export type token_usageCreateWithoutUsersInput = {
    id?: string;
    source: $Enums.token_source;
    ref_id?: string | null;
    tokens_input?: number | null;
    tokens_output?: number | null;
    tokens_total?: number | null;
    ai_model?: string | null;
    cost_usd?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    treatment_plans?: Prisma.treatment_plansCreateNestedOneWithoutToken_usageInput;
};
export type token_usageUncheckedCreateWithoutUsersInput = {
    id?: string;
    source: $Enums.token_source;
    ref_id?: string | null;
    tokens_input?: number | null;
    tokens_output?: number | null;
    tokens_total?: number | null;
    ai_model?: string | null;
    cost_usd?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    plan_id?: string | null;
};
export type token_usageCreateOrConnectWithoutUsersInput = {
    where: Prisma.token_usageWhereUniqueInput;
    create: Prisma.XOR<Prisma.token_usageCreateWithoutUsersInput, Prisma.token_usageUncheckedCreateWithoutUsersInput>;
};
export type token_usageCreateManyUsersInputEnvelope = {
    data: Prisma.token_usageCreateManyUsersInput | Prisma.token_usageCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type token_usageUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.token_usageWhereUniqueInput;
    update: Prisma.XOR<Prisma.token_usageUpdateWithoutUsersInput, Prisma.token_usageUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.token_usageCreateWithoutUsersInput, Prisma.token_usageUncheckedCreateWithoutUsersInput>;
};
export type token_usageUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.token_usageWhereUniqueInput;
    data: Prisma.XOR<Prisma.token_usageUpdateWithoutUsersInput, Prisma.token_usageUncheckedUpdateWithoutUsersInput>;
};
export type token_usageUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.token_usageScalarWhereInput;
    data: Prisma.XOR<Prisma.token_usageUpdateManyMutationInput, Prisma.token_usageUncheckedUpdateManyWithoutUsersInput>;
};
export type token_usageCreateManyTreatment_plansInput = {
    id?: string;
    user_id: string;
    source: $Enums.token_source;
    ref_id?: string | null;
    tokens_input?: number | null;
    tokens_output?: number | null;
    tokens_total?: number | null;
    ai_model?: string | null;
    cost_usd?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
};
export type token_usageUpdateWithoutTreatment_plansInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.Enumtoken_sourceFieldUpdateOperationsInput | $Enums.token_source;
    ref_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokens_input?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokens_output?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokens_total?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ai_model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost_usd?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneRequiredWithoutToken_usageNestedInput;
};
export type token_usageUncheckedUpdateWithoutTreatment_plansInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.Enumtoken_sourceFieldUpdateOperationsInput | $Enums.token_source;
    ref_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokens_input?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokens_output?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokens_total?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ai_model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost_usd?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type token_usageUncheckedUpdateManyWithoutTreatment_plansInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.Enumtoken_sourceFieldUpdateOperationsInput | $Enums.token_source;
    ref_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokens_input?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokens_output?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokens_total?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ai_model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost_usd?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type token_usageCreateManyUsersInput = {
    id?: string;
    source: $Enums.token_source;
    ref_id?: string | null;
    tokens_input?: number | null;
    tokens_output?: number | null;
    tokens_total?: number | null;
    ai_model?: string | null;
    cost_usd?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    plan_id?: string | null;
};
export type token_usageUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.Enumtoken_sourceFieldUpdateOperationsInput | $Enums.token_source;
    ref_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokens_input?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokens_output?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokens_total?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ai_model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost_usd?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    treatment_plans?: Prisma.treatment_plansUpdateOneWithoutToken_usageNestedInput;
};
export type token_usageUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.Enumtoken_sourceFieldUpdateOperationsInput | $Enums.token_source;
    ref_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokens_input?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokens_output?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokens_total?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ai_model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost_usd?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    plan_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type token_usageUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.Enumtoken_sourceFieldUpdateOperationsInput | $Enums.token_source;
    ref_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokens_input?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokens_output?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokens_total?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ai_model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost_usd?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    plan_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type token_usageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    source?: boolean;
    ref_id?: boolean;
    tokens_input?: boolean;
    tokens_output?: boolean;
    tokens_total?: boolean;
    ai_model?: boolean;
    cost_usd?: boolean;
    created_at?: boolean;
    plan_id?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    treatment_plans?: boolean | Prisma.token_usage$treatment_plansArgs<ExtArgs>;
}, ExtArgs["result"]["token_usage"]>;
export type token_usageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    source?: boolean;
    ref_id?: boolean;
    tokens_input?: boolean;
    tokens_output?: boolean;
    tokens_total?: boolean;
    ai_model?: boolean;
    cost_usd?: boolean;
    created_at?: boolean;
    plan_id?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    treatment_plans?: boolean | Prisma.token_usage$treatment_plansArgs<ExtArgs>;
}, ExtArgs["result"]["token_usage"]>;
export type token_usageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    source?: boolean;
    ref_id?: boolean;
    tokens_input?: boolean;
    tokens_output?: boolean;
    tokens_total?: boolean;
    ai_model?: boolean;
    cost_usd?: boolean;
    created_at?: boolean;
    plan_id?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    treatment_plans?: boolean | Prisma.token_usage$treatment_plansArgs<ExtArgs>;
}, ExtArgs["result"]["token_usage"]>;
export type token_usageSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    source?: boolean;
    ref_id?: boolean;
    tokens_input?: boolean;
    tokens_output?: boolean;
    tokens_total?: boolean;
    ai_model?: boolean;
    cost_usd?: boolean;
    created_at?: boolean;
    plan_id?: boolean;
};
export type token_usageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "source" | "ref_id" | "tokens_input" | "tokens_output" | "tokens_total" | "ai_model" | "cost_usd" | "created_at" | "plan_id", ExtArgs["result"]["token_usage"]>;
export type token_usageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    treatment_plans?: boolean | Prisma.token_usage$treatment_plansArgs<ExtArgs>;
};
export type token_usageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    treatment_plans?: boolean | Prisma.token_usage$treatment_plansArgs<ExtArgs>;
};
export type token_usageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    treatment_plans?: boolean | Prisma.token_usage$treatment_plansArgs<ExtArgs>;
};
export type $token_usagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "token_usage";
    objects: {
        users: Prisma.$usersPayload<ExtArgs>;
        treatment_plans: Prisma.$treatment_plansPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        source: $Enums.token_source;
        ref_id: string | null;
        tokens_input: number | null;
        tokens_output: number | null;
        tokens_total: number | null;
        ai_model: string | null;
        cost_usd: runtime.Decimal | null;
        created_at: Date | null;
        plan_id: string | null;
    }, ExtArgs["result"]["token_usage"]>;
    composites: {};
};
export type token_usageGetPayload<S extends boolean | null | undefined | token_usageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$token_usagePayload, S>;
export type token_usageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<token_usageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Token_usageCountAggregateInputType | true;
};
export interface token_usageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['token_usage'];
        meta: {
            name: 'token_usage';
        };
    };
    findUnique<T extends token_usageFindUniqueArgs>(args: Prisma.SelectSubset<T, token_usageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__token_usageClient<runtime.Types.Result.GetResult<Prisma.$token_usagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends token_usageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, token_usageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__token_usageClient<runtime.Types.Result.GetResult<Prisma.$token_usagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends token_usageFindFirstArgs>(args?: Prisma.SelectSubset<T, token_usageFindFirstArgs<ExtArgs>>): Prisma.Prisma__token_usageClient<runtime.Types.Result.GetResult<Prisma.$token_usagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends token_usageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, token_usageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__token_usageClient<runtime.Types.Result.GetResult<Prisma.$token_usagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends token_usageFindManyArgs>(args?: Prisma.SelectSubset<T, token_usageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$token_usagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends token_usageCreateArgs>(args: Prisma.SelectSubset<T, token_usageCreateArgs<ExtArgs>>): Prisma.Prisma__token_usageClient<runtime.Types.Result.GetResult<Prisma.$token_usagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends token_usageCreateManyArgs>(args?: Prisma.SelectSubset<T, token_usageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends token_usageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, token_usageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$token_usagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends token_usageDeleteArgs>(args: Prisma.SelectSubset<T, token_usageDeleteArgs<ExtArgs>>): Prisma.Prisma__token_usageClient<runtime.Types.Result.GetResult<Prisma.$token_usagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends token_usageUpdateArgs>(args: Prisma.SelectSubset<T, token_usageUpdateArgs<ExtArgs>>): Prisma.Prisma__token_usageClient<runtime.Types.Result.GetResult<Prisma.$token_usagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends token_usageDeleteManyArgs>(args?: Prisma.SelectSubset<T, token_usageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends token_usageUpdateManyArgs>(args: Prisma.SelectSubset<T, token_usageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends token_usageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, token_usageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$token_usagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends token_usageUpsertArgs>(args: Prisma.SelectSubset<T, token_usageUpsertArgs<ExtArgs>>): Prisma.Prisma__token_usageClient<runtime.Types.Result.GetResult<Prisma.$token_usagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends token_usageCountArgs>(args?: Prisma.Subset<T, token_usageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Token_usageCountAggregateOutputType> : number>;
    aggregate<T extends Token_usageAggregateArgs>(args: Prisma.Subset<T, Token_usageAggregateArgs>): Prisma.PrismaPromise<GetToken_usageAggregateType<T>>;
    groupBy<T extends token_usageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: token_usageGroupByArgs['orderBy'];
    } : {
        orderBy?: token_usageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, token_usageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToken_usageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: token_usageFieldRefs;
}
export interface Prisma__token_usageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    treatment_plans<T extends Prisma.token_usage$treatment_plansArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.token_usage$treatment_plansArgs<ExtArgs>>): Prisma.Prisma__treatment_plansClient<runtime.Types.Result.GetResult<Prisma.$treatment_plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface token_usageFieldRefs {
    readonly id: Prisma.FieldRef<"token_usage", 'String'>;
    readonly user_id: Prisma.FieldRef<"token_usage", 'String'>;
    readonly source: Prisma.FieldRef<"token_usage", 'token_source'>;
    readonly ref_id: Prisma.FieldRef<"token_usage", 'String'>;
    readonly tokens_input: Prisma.FieldRef<"token_usage", 'Int'>;
    readonly tokens_output: Prisma.FieldRef<"token_usage", 'Int'>;
    readonly tokens_total: Prisma.FieldRef<"token_usage", 'Int'>;
    readonly ai_model: Prisma.FieldRef<"token_usage", 'String'>;
    readonly cost_usd: Prisma.FieldRef<"token_usage", 'Decimal'>;
    readonly created_at: Prisma.FieldRef<"token_usage", 'DateTime'>;
    readonly plan_id: Prisma.FieldRef<"token_usage", 'String'>;
}
export type token_usageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.token_usageSelect<ExtArgs> | null;
    omit?: Prisma.token_usageOmit<ExtArgs> | null;
    include?: Prisma.token_usageInclude<ExtArgs> | null;
    where: Prisma.token_usageWhereUniqueInput;
};
export type token_usageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.token_usageSelect<ExtArgs> | null;
    omit?: Prisma.token_usageOmit<ExtArgs> | null;
    include?: Prisma.token_usageInclude<ExtArgs> | null;
    where: Prisma.token_usageWhereUniqueInput;
};
export type token_usageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.token_usageSelect<ExtArgs> | null;
    omit?: Prisma.token_usageOmit<ExtArgs> | null;
    include?: Prisma.token_usageInclude<ExtArgs> | null;
    where?: Prisma.token_usageWhereInput;
    orderBy?: Prisma.token_usageOrderByWithRelationInput | Prisma.token_usageOrderByWithRelationInput[];
    cursor?: Prisma.token_usageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Token_usageScalarFieldEnum | Prisma.Token_usageScalarFieldEnum[];
};
export type token_usageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.token_usageSelect<ExtArgs> | null;
    omit?: Prisma.token_usageOmit<ExtArgs> | null;
    include?: Prisma.token_usageInclude<ExtArgs> | null;
    where?: Prisma.token_usageWhereInput;
    orderBy?: Prisma.token_usageOrderByWithRelationInput | Prisma.token_usageOrderByWithRelationInput[];
    cursor?: Prisma.token_usageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Token_usageScalarFieldEnum | Prisma.Token_usageScalarFieldEnum[];
};
export type token_usageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.token_usageSelect<ExtArgs> | null;
    omit?: Prisma.token_usageOmit<ExtArgs> | null;
    include?: Prisma.token_usageInclude<ExtArgs> | null;
    where?: Prisma.token_usageWhereInput;
    orderBy?: Prisma.token_usageOrderByWithRelationInput | Prisma.token_usageOrderByWithRelationInput[];
    cursor?: Prisma.token_usageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Token_usageScalarFieldEnum | Prisma.Token_usageScalarFieldEnum[];
};
export type token_usageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.token_usageSelect<ExtArgs> | null;
    omit?: Prisma.token_usageOmit<ExtArgs> | null;
    include?: Prisma.token_usageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.token_usageCreateInput, Prisma.token_usageUncheckedCreateInput>;
};
export type token_usageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.token_usageCreateManyInput | Prisma.token_usageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type token_usageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.token_usageSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.token_usageOmit<ExtArgs> | null;
    data: Prisma.token_usageCreateManyInput | Prisma.token_usageCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.token_usageIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type token_usageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.token_usageSelect<ExtArgs> | null;
    omit?: Prisma.token_usageOmit<ExtArgs> | null;
    include?: Prisma.token_usageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.token_usageUpdateInput, Prisma.token_usageUncheckedUpdateInput>;
    where: Prisma.token_usageWhereUniqueInput;
};
export type token_usageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.token_usageUpdateManyMutationInput, Prisma.token_usageUncheckedUpdateManyInput>;
    where?: Prisma.token_usageWhereInput;
    limit?: number;
};
export type token_usageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.token_usageSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.token_usageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.token_usageUpdateManyMutationInput, Prisma.token_usageUncheckedUpdateManyInput>;
    where?: Prisma.token_usageWhereInput;
    limit?: number;
    include?: Prisma.token_usageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type token_usageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.token_usageSelect<ExtArgs> | null;
    omit?: Prisma.token_usageOmit<ExtArgs> | null;
    include?: Prisma.token_usageInclude<ExtArgs> | null;
    where: Prisma.token_usageWhereUniqueInput;
    create: Prisma.XOR<Prisma.token_usageCreateInput, Prisma.token_usageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.token_usageUpdateInput, Prisma.token_usageUncheckedUpdateInput>;
};
export type token_usageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.token_usageSelect<ExtArgs> | null;
    omit?: Prisma.token_usageOmit<ExtArgs> | null;
    include?: Prisma.token_usageInclude<ExtArgs> | null;
    where: Prisma.token_usageWhereUniqueInput;
};
export type token_usageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.token_usageWhereInput;
    limit?: number;
};
export type token_usage$treatment_plansArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.treatment_plansSelect<ExtArgs> | null;
    omit?: Prisma.treatment_plansOmit<ExtArgs> | null;
    include?: Prisma.treatment_plansInclude<ExtArgs> | null;
    where?: Prisma.treatment_plansWhereInput;
};
export type token_usageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.token_usageSelect<ExtArgs> | null;
    omit?: Prisma.token_usageOmit<ExtArgs> | null;
    include?: Prisma.token_usageInclude<ExtArgs> | null;
};
export {};
