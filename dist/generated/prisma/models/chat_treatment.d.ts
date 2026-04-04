import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type chat_treatmentModel = runtime.Types.Result.DefaultSelection<Prisma.$chat_treatmentPayload>;
export type AggregateChat_treatment = {
    _count: Chat_treatmentCountAggregateOutputType | null;
    _avg: Chat_treatmentAvgAggregateOutputType | null;
    _sum: Chat_treatmentSumAggregateOutputType | null;
    _min: Chat_treatmentMinAggregateOutputType | null;
    _max: Chat_treatmentMaxAggregateOutputType | null;
};
export type Chat_treatmentAvgAggregateOutputType = {
    day_number: number | null;
};
export type Chat_treatmentSumAggregateOutputType = {
    day_number: number | null;
};
export type Chat_treatmentMinAggregateOutputType = {
    id: string | null;
    plan_id: string | null;
    user_message: string | null;
    ai_response: string | null;
    have_photo: boolean | null;
    day_number: number | null;
    image_url: string | null;
    image_key: string | null;
    created_at: Date | null;
};
export type Chat_treatmentMaxAggregateOutputType = {
    id: string | null;
    plan_id: string | null;
    user_message: string | null;
    ai_response: string | null;
    have_photo: boolean | null;
    day_number: number | null;
    image_url: string | null;
    image_key: string | null;
    created_at: Date | null;
};
export type Chat_treatmentCountAggregateOutputType = {
    id: number;
    plan_id: number;
    user_message: number;
    ai_response: number;
    have_photo: number;
    day_number: number;
    image_url: number;
    image_key: number;
    created_at: number;
    _all: number;
};
export type Chat_treatmentAvgAggregateInputType = {
    day_number?: true;
};
export type Chat_treatmentSumAggregateInputType = {
    day_number?: true;
};
export type Chat_treatmentMinAggregateInputType = {
    id?: true;
    plan_id?: true;
    user_message?: true;
    ai_response?: true;
    have_photo?: true;
    day_number?: true;
    image_url?: true;
    image_key?: true;
    created_at?: true;
};
export type Chat_treatmentMaxAggregateInputType = {
    id?: true;
    plan_id?: true;
    user_message?: true;
    ai_response?: true;
    have_photo?: true;
    day_number?: true;
    image_url?: true;
    image_key?: true;
    created_at?: true;
};
export type Chat_treatmentCountAggregateInputType = {
    id?: true;
    plan_id?: true;
    user_message?: true;
    ai_response?: true;
    have_photo?: true;
    day_number?: true;
    image_url?: true;
    image_key?: true;
    created_at?: true;
    _all?: true;
};
export type Chat_treatmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.chat_treatmentWhereInput;
    orderBy?: Prisma.chat_treatmentOrderByWithRelationInput | Prisma.chat_treatmentOrderByWithRelationInput[];
    cursor?: Prisma.chat_treatmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Chat_treatmentCountAggregateInputType;
    _avg?: Chat_treatmentAvgAggregateInputType;
    _sum?: Chat_treatmentSumAggregateInputType;
    _min?: Chat_treatmentMinAggregateInputType;
    _max?: Chat_treatmentMaxAggregateInputType;
};
export type GetChat_treatmentAggregateType<T extends Chat_treatmentAggregateArgs> = {
    [P in keyof T & keyof AggregateChat_treatment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChat_treatment[P]> : Prisma.GetScalarType<T[P], AggregateChat_treatment[P]>;
};
export type chat_treatmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.chat_treatmentWhereInput;
    orderBy?: Prisma.chat_treatmentOrderByWithAggregationInput | Prisma.chat_treatmentOrderByWithAggregationInput[];
    by: Prisma.Chat_treatmentScalarFieldEnum[] | Prisma.Chat_treatmentScalarFieldEnum;
    having?: Prisma.chat_treatmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Chat_treatmentCountAggregateInputType | true;
    _avg?: Chat_treatmentAvgAggregateInputType;
    _sum?: Chat_treatmentSumAggregateInputType;
    _min?: Chat_treatmentMinAggregateInputType;
    _max?: Chat_treatmentMaxAggregateInputType;
};
export type Chat_treatmentGroupByOutputType = {
    id: string;
    plan_id: string;
    user_message: string;
    ai_response: string;
    have_photo: boolean;
    day_number: number | null;
    image_url: string | null;
    image_key: string | null;
    created_at: Date;
    _count: Chat_treatmentCountAggregateOutputType | null;
    _avg: Chat_treatmentAvgAggregateOutputType | null;
    _sum: Chat_treatmentSumAggregateOutputType | null;
    _min: Chat_treatmentMinAggregateOutputType | null;
    _max: Chat_treatmentMaxAggregateOutputType | null;
};
export type GetChat_treatmentGroupByPayload<T extends chat_treatmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Chat_treatmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Chat_treatmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Chat_treatmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Chat_treatmentGroupByOutputType[P]>;
}>>;
export type chat_treatmentWhereInput = {
    AND?: Prisma.chat_treatmentWhereInput | Prisma.chat_treatmentWhereInput[];
    OR?: Prisma.chat_treatmentWhereInput[];
    NOT?: Prisma.chat_treatmentWhereInput | Prisma.chat_treatmentWhereInput[];
    id?: Prisma.UuidFilter<"chat_treatment"> | string;
    plan_id?: Prisma.UuidFilter<"chat_treatment"> | string;
    user_message?: Prisma.StringFilter<"chat_treatment"> | string;
    ai_response?: Prisma.StringFilter<"chat_treatment"> | string;
    have_photo?: Prisma.BoolFilter<"chat_treatment"> | boolean;
    day_number?: Prisma.IntNullableFilter<"chat_treatment"> | number | null;
    image_url?: Prisma.StringNullableFilter<"chat_treatment"> | string | null;
    image_key?: Prisma.StringNullableFilter<"chat_treatment"> | string | null;
    created_at?: Prisma.DateTimeFilter<"chat_treatment"> | Date | string;
    treatment_plans?: Prisma.XOR<Prisma.Treatment_plansScalarRelationFilter, Prisma.treatment_plansWhereInput>;
};
export type chat_treatmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    plan_id?: Prisma.SortOrder;
    user_message?: Prisma.SortOrder;
    ai_response?: Prisma.SortOrder;
    have_photo?: Prisma.SortOrder;
    day_number?: Prisma.SortOrderInput | Prisma.SortOrder;
    image_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    image_key?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    treatment_plans?: Prisma.treatment_plansOrderByWithRelationInput;
};
export type chat_treatmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.chat_treatmentWhereInput | Prisma.chat_treatmentWhereInput[];
    OR?: Prisma.chat_treatmentWhereInput[];
    NOT?: Prisma.chat_treatmentWhereInput | Prisma.chat_treatmentWhereInput[];
    plan_id?: Prisma.UuidFilter<"chat_treatment"> | string;
    user_message?: Prisma.StringFilter<"chat_treatment"> | string;
    ai_response?: Prisma.StringFilter<"chat_treatment"> | string;
    have_photo?: Prisma.BoolFilter<"chat_treatment"> | boolean;
    day_number?: Prisma.IntNullableFilter<"chat_treatment"> | number | null;
    image_url?: Prisma.StringNullableFilter<"chat_treatment"> | string | null;
    image_key?: Prisma.StringNullableFilter<"chat_treatment"> | string | null;
    created_at?: Prisma.DateTimeFilter<"chat_treatment"> | Date | string;
    treatment_plans?: Prisma.XOR<Prisma.Treatment_plansScalarRelationFilter, Prisma.treatment_plansWhereInput>;
}, "id">;
export type chat_treatmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    plan_id?: Prisma.SortOrder;
    user_message?: Prisma.SortOrder;
    ai_response?: Prisma.SortOrder;
    have_photo?: Prisma.SortOrder;
    day_number?: Prisma.SortOrderInput | Prisma.SortOrder;
    image_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    image_key?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.chat_treatmentCountOrderByAggregateInput;
    _avg?: Prisma.chat_treatmentAvgOrderByAggregateInput;
    _max?: Prisma.chat_treatmentMaxOrderByAggregateInput;
    _min?: Prisma.chat_treatmentMinOrderByAggregateInput;
    _sum?: Prisma.chat_treatmentSumOrderByAggregateInput;
};
export type chat_treatmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.chat_treatmentScalarWhereWithAggregatesInput | Prisma.chat_treatmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.chat_treatmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.chat_treatmentScalarWhereWithAggregatesInput | Prisma.chat_treatmentScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"chat_treatment"> | string;
    plan_id?: Prisma.UuidWithAggregatesFilter<"chat_treatment"> | string;
    user_message?: Prisma.StringWithAggregatesFilter<"chat_treatment"> | string;
    ai_response?: Prisma.StringWithAggregatesFilter<"chat_treatment"> | string;
    have_photo?: Prisma.BoolWithAggregatesFilter<"chat_treatment"> | boolean;
    day_number?: Prisma.IntNullableWithAggregatesFilter<"chat_treatment"> | number | null;
    image_url?: Prisma.StringNullableWithAggregatesFilter<"chat_treatment"> | string | null;
    image_key?: Prisma.StringNullableWithAggregatesFilter<"chat_treatment"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"chat_treatment"> | Date | string;
};
export type chat_treatmentCreateInput = {
    id?: string;
    user_message: string;
    ai_response: string;
    have_photo?: boolean;
    day_number?: number | null;
    image_url?: string | null;
    image_key?: string | null;
    created_at?: Date | string;
    treatment_plans: Prisma.treatment_plansCreateNestedOneWithoutChat_treatmentInput;
};
export type chat_treatmentUncheckedCreateInput = {
    id?: string;
    plan_id: string;
    user_message: string;
    ai_response: string;
    have_photo?: boolean;
    day_number?: number | null;
    image_url?: string | null;
    image_key?: string | null;
    created_at?: Date | string;
};
export type chat_treatmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_message?: Prisma.StringFieldUpdateOperationsInput | string;
    ai_response?: Prisma.StringFieldUpdateOperationsInput | string;
    have_photo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    day_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    treatment_plans?: Prisma.treatment_plansUpdateOneRequiredWithoutChat_treatmentNestedInput;
};
export type chat_treatmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plan_id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_message?: Prisma.StringFieldUpdateOperationsInput | string;
    ai_response?: Prisma.StringFieldUpdateOperationsInput | string;
    have_photo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    day_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type chat_treatmentCreateManyInput = {
    id?: string;
    plan_id: string;
    user_message: string;
    ai_response: string;
    have_photo?: boolean;
    day_number?: number | null;
    image_url?: string | null;
    image_key?: string | null;
    created_at?: Date | string;
};
export type chat_treatmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_message?: Prisma.StringFieldUpdateOperationsInput | string;
    ai_response?: Prisma.StringFieldUpdateOperationsInput | string;
    have_photo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    day_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type chat_treatmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plan_id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_message?: Prisma.StringFieldUpdateOperationsInput | string;
    ai_response?: Prisma.StringFieldUpdateOperationsInput | string;
    have_photo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    day_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type chat_treatmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    plan_id?: Prisma.SortOrder;
    user_message?: Prisma.SortOrder;
    ai_response?: Prisma.SortOrder;
    have_photo?: Prisma.SortOrder;
    day_number?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    image_key?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type chat_treatmentAvgOrderByAggregateInput = {
    day_number?: Prisma.SortOrder;
};
export type chat_treatmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    plan_id?: Prisma.SortOrder;
    user_message?: Prisma.SortOrder;
    ai_response?: Prisma.SortOrder;
    have_photo?: Prisma.SortOrder;
    day_number?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    image_key?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type chat_treatmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    plan_id?: Prisma.SortOrder;
    user_message?: Prisma.SortOrder;
    ai_response?: Prisma.SortOrder;
    have_photo?: Prisma.SortOrder;
    day_number?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    image_key?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type chat_treatmentSumOrderByAggregateInput = {
    day_number?: Prisma.SortOrder;
};
export type Chat_treatmentListRelationFilter = {
    every?: Prisma.chat_treatmentWhereInput;
    some?: Prisma.chat_treatmentWhereInput;
    none?: Prisma.chat_treatmentWhereInput;
};
export type chat_treatmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type chat_treatmentCreateNestedManyWithoutTreatment_plansInput = {
    create?: Prisma.XOR<Prisma.chat_treatmentCreateWithoutTreatment_plansInput, Prisma.chat_treatmentUncheckedCreateWithoutTreatment_plansInput> | Prisma.chat_treatmentCreateWithoutTreatment_plansInput[] | Prisma.chat_treatmentUncheckedCreateWithoutTreatment_plansInput[];
    connectOrCreate?: Prisma.chat_treatmentCreateOrConnectWithoutTreatment_plansInput | Prisma.chat_treatmentCreateOrConnectWithoutTreatment_plansInput[];
    createMany?: Prisma.chat_treatmentCreateManyTreatment_plansInputEnvelope;
    connect?: Prisma.chat_treatmentWhereUniqueInput | Prisma.chat_treatmentWhereUniqueInput[];
};
export type chat_treatmentUncheckedCreateNestedManyWithoutTreatment_plansInput = {
    create?: Prisma.XOR<Prisma.chat_treatmentCreateWithoutTreatment_plansInput, Prisma.chat_treatmentUncheckedCreateWithoutTreatment_plansInput> | Prisma.chat_treatmentCreateWithoutTreatment_plansInput[] | Prisma.chat_treatmentUncheckedCreateWithoutTreatment_plansInput[];
    connectOrCreate?: Prisma.chat_treatmentCreateOrConnectWithoutTreatment_plansInput | Prisma.chat_treatmentCreateOrConnectWithoutTreatment_plansInput[];
    createMany?: Prisma.chat_treatmentCreateManyTreatment_plansInputEnvelope;
    connect?: Prisma.chat_treatmentWhereUniqueInput | Prisma.chat_treatmentWhereUniqueInput[];
};
export type chat_treatmentUpdateManyWithoutTreatment_plansNestedInput = {
    create?: Prisma.XOR<Prisma.chat_treatmentCreateWithoutTreatment_plansInput, Prisma.chat_treatmentUncheckedCreateWithoutTreatment_plansInput> | Prisma.chat_treatmentCreateWithoutTreatment_plansInput[] | Prisma.chat_treatmentUncheckedCreateWithoutTreatment_plansInput[];
    connectOrCreate?: Prisma.chat_treatmentCreateOrConnectWithoutTreatment_plansInput | Prisma.chat_treatmentCreateOrConnectWithoutTreatment_plansInput[];
    upsert?: Prisma.chat_treatmentUpsertWithWhereUniqueWithoutTreatment_plansInput | Prisma.chat_treatmentUpsertWithWhereUniqueWithoutTreatment_plansInput[];
    createMany?: Prisma.chat_treatmentCreateManyTreatment_plansInputEnvelope;
    set?: Prisma.chat_treatmentWhereUniqueInput | Prisma.chat_treatmentWhereUniqueInput[];
    disconnect?: Prisma.chat_treatmentWhereUniqueInput | Prisma.chat_treatmentWhereUniqueInput[];
    delete?: Prisma.chat_treatmentWhereUniqueInput | Prisma.chat_treatmentWhereUniqueInput[];
    connect?: Prisma.chat_treatmentWhereUniqueInput | Prisma.chat_treatmentWhereUniqueInput[];
    update?: Prisma.chat_treatmentUpdateWithWhereUniqueWithoutTreatment_plansInput | Prisma.chat_treatmentUpdateWithWhereUniqueWithoutTreatment_plansInput[];
    updateMany?: Prisma.chat_treatmentUpdateManyWithWhereWithoutTreatment_plansInput | Prisma.chat_treatmentUpdateManyWithWhereWithoutTreatment_plansInput[];
    deleteMany?: Prisma.chat_treatmentScalarWhereInput | Prisma.chat_treatmentScalarWhereInput[];
};
export type chat_treatmentUncheckedUpdateManyWithoutTreatment_plansNestedInput = {
    create?: Prisma.XOR<Prisma.chat_treatmentCreateWithoutTreatment_plansInput, Prisma.chat_treatmentUncheckedCreateWithoutTreatment_plansInput> | Prisma.chat_treatmentCreateWithoutTreatment_plansInput[] | Prisma.chat_treatmentUncheckedCreateWithoutTreatment_plansInput[];
    connectOrCreate?: Prisma.chat_treatmentCreateOrConnectWithoutTreatment_plansInput | Prisma.chat_treatmentCreateOrConnectWithoutTreatment_plansInput[];
    upsert?: Prisma.chat_treatmentUpsertWithWhereUniqueWithoutTreatment_plansInput | Prisma.chat_treatmentUpsertWithWhereUniqueWithoutTreatment_plansInput[];
    createMany?: Prisma.chat_treatmentCreateManyTreatment_plansInputEnvelope;
    set?: Prisma.chat_treatmentWhereUniqueInput | Prisma.chat_treatmentWhereUniqueInput[];
    disconnect?: Prisma.chat_treatmentWhereUniqueInput | Prisma.chat_treatmentWhereUniqueInput[];
    delete?: Prisma.chat_treatmentWhereUniqueInput | Prisma.chat_treatmentWhereUniqueInput[];
    connect?: Prisma.chat_treatmentWhereUniqueInput | Prisma.chat_treatmentWhereUniqueInput[];
    update?: Prisma.chat_treatmentUpdateWithWhereUniqueWithoutTreatment_plansInput | Prisma.chat_treatmentUpdateWithWhereUniqueWithoutTreatment_plansInput[];
    updateMany?: Prisma.chat_treatmentUpdateManyWithWhereWithoutTreatment_plansInput | Prisma.chat_treatmentUpdateManyWithWhereWithoutTreatment_plansInput[];
    deleteMany?: Prisma.chat_treatmentScalarWhereInput | Prisma.chat_treatmentScalarWhereInput[];
};
export type chat_treatmentCreateWithoutTreatment_plansInput = {
    id?: string;
    user_message: string;
    ai_response: string;
    have_photo?: boolean;
    day_number?: number | null;
    image_url?: string | null;
    image_key?: string | null;
    created_at?: Date | string;
};
export type chat_treatmentUncheckedCreateWithoutTreatment_plansInput = {
    id?: string;
    user_message: string;
    ai_response: string;
    have_photo?: boolean;
    day_number?: number | null;
    image_url?: string | null;
    image_key?: string | null;
    created_at?: Date | string;
};
export type chat_treatmentCreateOrConnectWithoutTreatment_plansInput = {
    where: Prisma.chat_treatmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.chat_treatmentCreateWithoutTreatment_plansInput, Prisma.chat_treatmentUncheckedCreateWithoutTreatment_plansInput>;
};
export type chat_treatmentCreateManyTreatment_plansInputEnvelope = {
    data: Prisma.chat_treatmentCreateManyTreatment_plansInput | Prisma.chat_treatmentCreateManyTreatment_plansInput[];
    skipDuplicates?: boolean;
};
export type chat_treatmentUpsertWithWhereUniqueWithoutTreatment_plansInput = {
    where: Prisma.chat_treatmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.chat_treatmentUpdateWithoutTreatment_plansInput, Prisma.chat_treatmentUncheckedUpdateWithoutTreatment_plansInput>;
    create: Prisma.XOR<Prisma.chat_treatmentCreateWithoutTreatment_plansInput, Prisma.chat_treatmentUncheckedCreateWithoutTreatment_plansInput>;
};
export type chat_treatmentUpdateWithWhereUniqueWithoutTreatment_plansInput = {
    where: Prisma.chat_treatmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.chat_treatmentUpdateWithoutTreatment_plansInput, Prisma.chat_treatmentUncheckedUpdateWithoutTreatment_plansInput>;
};
export type chat_treatmentUpdateManyWithWhereWithoutTreatment_plansInput = {
    where: Prisma.chat_treatmentScalarWhereInput;
    data: Prisma.XOR<Prisma.chat_treatmentUpdateManyMutationInput, Prisma.chat_treatmentUncheckedUpdateManyWithoutTreatment_plansInput>;
};
export type chat_treatmentScalarWhereInput = {
    AND?: Prisma.chat_treatmentScalarWhereInput | Prisma.chat_treatmentScalarWhereInput[];
    OR?: Prisma.chat_treatmentScalarWhereInput[];
    NOT?: Prisma.chat_treatmentScalarWhereInput | Prisma.chat_treatmentScalarWhereInput[];
    id?: Prisma.UuidFilter<"chat_treatment"> | string;
    plan_id?: Prisma.UuidFilter<"chat_treatment"> | string;
    user_message?: Prisma.StringFilter<"chat_treatment"> | string;
    ai_response?: Prisma.StringFilter<"chat_treatment"> | string;
    have_photo?: Prisma.BoolFilter<"chat_treatment"> | boolean;
    day_number?: Prisma.IntNullableFilter<"chat_treatment"> | number | null;
    image_url?: Prisma.StringNullableFilter<"chat_treatment"> | string | null;
    image_key?: Prisma.StringNullableFilter<"chat_treatment"> | string | null;
    created_at?: Prisma.DateTimeFilter<"chat_treatment"> | Date | string;
};
export type chat_treatmentCreateManyTreatment_plansInput = {
    id?: string;
    user_message: string;
    ai_response: string;
    have_photo?: boolean;
    day_number?: number | null;
    image_url?: string | null;
    image_key?: string | null;
    created_at?: Date | string;
};
export type chat_treatmentUpdateWithoutTreatment_plansInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_message?: Prisma.StringFieldUpdateOperationsInput | string;
    ai_response?: Prisma.StringFieldUpdateOperationsInput | string;
    have_photo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    day_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type chat_treatmentUncheckedUpdateWithoutTreatment_plansInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_message?: Prisma.StringFieldUpdateOperationsInput | string;
    ai_response?: Prisma.StringFieldUpdateOperationsInput | string;
    have_photo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    day_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type chat_treatmentUncheckedUpdateManyWithoutTreatment_plansInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_message?: Prisma.StringFieldUpdateOperationsInput | string;
    ai_response?: Prisma.StringFieldUpdateOperationsInput | string;
    have_photo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    day_number?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type chat_treatmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    plan_id?: boolean;
    user_message?: boolean;
    ai_response?: boolean;
    have_photo?: boolean;
    day_number?: boolean;
    image_url?: boolean;
    image_key?: boolean;
    created_at?: boolean;
    treatment_plans?: boolean | Prisma.treatment_plansDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chat_treatment"]>;
export type chat_treatmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    plan_id?: boolean;
    user_message?: boolean;
    ai_response?: boolean;
    have_photo?: boolean;
    day_number?: boolean;
    image_url?: boolean;
    image_key?: boolean;
    created_at?: boolean;
    treatment_plans?: boolean | Prisma.treatment_plansDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chat_treatment"]>;
export type chat_treatmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    plan_id?: boolean;
    user_message?: boolean;
    ai_response?: boolean;
    have_photo?: boolean;
    day_number?: boolean;
    image_url?: boolean;
    image_key?: boolean;
    created_at?: boolean;
    treatment_plans?: boolean | Prisma.treatment_plansDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chat_treatment"]>;
export type chat_treatmentSelectScalar = {
    id?: boolean;
    plan_id?: boolean;
    user_message?: boolean;
    ai_response?: boolean;
    have_photo?: boolean;
    day_number?: boolean;
    image_url?: boolean;
    image_key?: boolean;
    created_at?: boolean;
};
export type chat_treatmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "plan_id" | "user_message" | "ai_response" | "have_photo" | "day_number" | "image_url" | "image_key" | "created_at", ExtArgs["result"]["chat_treatment"]>;
export type chat_treatmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    treatment_plans?: boolean | Prisma.treatment_plansDefaultArgs<ExtArgs>;
};
export type chat_treatmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    treatment_plans?: boolean | Prisma.treatment_plansDefaultArgs<ExtArgs>;
};
export type chat_treatmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    treatment_plans?: boolean | Prisma.treatment_plansDefaultArgs<ExtArgs>;
};
export type $chat_treatmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "chat_treatment";
    objects: {
        treatment_plans: Prisma.$treatment_plansPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        plan_id: string;
        user_message: string;
        ai_response: string;
        have_photo: boolean;
        day_number: number | null;
        image_url: string | null;
        image_key: string | null;
        created_at: Date;
    }, ExtArgs["result"]["chat_treatment"]>;
    composites: {};
};
export type chat_treatmentGetPayload<S extends boolean | null | undefined | chat_treatmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$chat_treatmentPayload, S>;
export type chat_treatmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<chat_treatmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Chat_treatmentCountAggregateInputType | true;
};
export interface chat_treatmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['chat_treatment'];
        meta: {
            name: 'chat_treatment';
        };
    };
    findUnique<T extends chat_treatmentFindUniqueArgs>(args: Prisma.SelectSubset<T, chat_treatmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__chat_treatmentClient<runtime.Types.Result.GetResult<Prisma.$chat_treatmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends chat_treatmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, chat_treatmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__chat_treatmentClient<runtime.Types.Result.GetResult<Prisma.$chat_treatmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends chat_treatmentFindFirstArgs>(args?: Prisma.SelectSubset<T, chat_treatmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__chat_treatmentClient<runtime.Types.Result.GetResult<Prisma.$chat_treatmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends chat_treatmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, chat_treatmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__chat_treatmentClient<runtime.Types.Result.GetResult<Prisma.$chat_treatmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends chat_treatmentFindManyArgs>(args?: Prisma.SelectSubset<T, chat_treatmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$chat_treatmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends chat_treatmentCreateArgs>(args: Prisma.SelectSubset<T, chat_treatmentCreateArgs<ExtArgs>>): Prisma.Prisma__chat_treatmentClient<runtime.Types.Result.GetResult<Prisma.$chat_treatmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends chat_treatmentCreateManyArgs>(args?: Prisma.SelectSubset<T, chat_treatmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends chat_treatmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, chat_treatmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$chat_treatmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends chat_treatmentDeleteArgs>(args: Prisma.SelectSubset<T, chat_treatmentDeleteArgs<ExtArgs>>): Prisma.Prisma__chat_treatmentClient<runtime.Types.Result.GetResult<Prisma.$chat_treatmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends chat_treatmentUpdateArgs>(args: Prisma.SelectSubset<T, chat_treatmentUpdateArgs<ExtArgs>>): Prisma.Prisma__chat_treatmentClient<runtime.Types.Result.GetResult<Prisma.$chat_treatmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends chat_treatmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, chat_treatmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends chat_treatmentUpdateManyArgs>(args: Prisma.SelectSubset<T, chat_treatmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends chat_treatmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, chat_treatmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$chat_treatmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends chat_treatmentUpsertArgs>(args: Prisma.SelectSubset<T, chat_treatmentUpsertArgs<ExtArgs>>): Prisma.Prisma__chat_treatmentClient<runtime.Types.Result.GetResult<Prisma.$chat_treatmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends chat_treatmentCountArgs>(args?: Prisma.Subset<T, chat_treatmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Chat_treatmentCountAggregateOutputType> : number>;
    aggregate<T extends Chat_treatmentAggregateArgs>(args: Prisma.Subset<T, Chat_treatmentAggregateArgs>): Prisma.PrismaPromise<GetChat_treatmentAggregateType<T>>;
    groupBy<T extends chat_treatmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: chat_treatmentGroupByArgs['orderBy'];
    } : {
        orderBy?: chat_treatmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, chat_treatmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChat_treatmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: chat_treatmentFieldRefs;
}
export interface Prisma__chat_treatmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    treatment_plans<T extends Prisma.treatment_plansDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.treatment_plansDefaultArgs<ExtArgs>>): Prisma.Prisma__treatment_plansClient<runtime.Types.Result.GetResult<Prisma.$treatment_plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface chat_treatmentFieldRefs {
    readonly id: Prisma.FieldRef<"chat_treatment", 'String'>;
    readonly plan_id: Prisma.FieldRef<"chat_treatment", 'String'>;
    readonly user_message: Prisma.FieldRef<"chat_treatment", 'String'>;
    readonly ai_response: Prisma.FieldRef<"chat_treatment", 'String'>;
    readonly have_photo: Prisma.FieldRef<"chat_treatment", 'Boolean'>;
    readonly day_number: Prisma.FieldRef<"chat_treatment", 'Int'>;
    readonly image_url: Prisma.FieldRef<"chat_treatment", 'String'>;
    readonly image_key: Prisma.FieldRef<"chat_treatment", 'String'>;
    readonly created_at: Prisma.FieldRef<"chat_treatment", 'DateTime'>;
}
export type chat_treatmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chat_treatmentSelect<ExtArgs> | null;
    omit?: Prisma.chat_treatmentOmit<ExtArgs> | null;
    include?: Prisma.chat_treatmentInclude<ExtArgs> | null;
    where: Prisma.chat_treatmentWhereUniqueInput;
};
export type chat_treatmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chat_treatmentSelect<ExtArgs> | null;
    omit?: Prisma.chat_treatmentOmit<ExtArgs> | null;
    include?: Prisma.chat_treatmentInclude<ExtArgs> | null;
    where: Prisma.chat_treatmentWhereUniqueInput;
};
export type chat_treatmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chat_treatmentSelect<ExtArgs> | null;
    omit?: Prisma.chat_treatmentOmit<ExtArgs> | null;
    include?: Prisma.chat_treatmentInclude<ExtArgs> | null;
    where?: Prisma.chat_treatmentWhereInput;
    orderBy?: Prisma.chat_treatmentOrderByWithRelationInput | Prisma.chat_treatmentOrderByWithRelationInput[];
    cursor?: Prisma.chat_treatmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Chat_treatmentScalarFieldEnum | Prisma.Chat_treatmentScalarFieldEnum[];
};
export type chat_treatmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chat_treatmentSelect<ExtArgs> | null;
    omit?: Prisma.chat_treatmentOmit<ExtArgs> | null;
    include?: Prisma.chat_treatmentInclude<ExtArgs> | null;
    where?: Prisma.chat_treatmentWhereInput;
    orderBy?: Prisma.chat_treatmentOrderByWithRelationInput | Prisma.chat_treatmentOrderByWithRelationInput[];
    cursor?: Prisma.chat_treatmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Chat_treatmentScalarFieldEnum | Prisma.Chat_treatmentScalarFieldEnum[];
};
export type chat_treatmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chat_treatmentSelect<ExtArgs> | null;
    omit?: Prisma.chat_treatmentOmit<ExtArgs> | null;
    include?: Prisma.chat_treatmentInclude<ExtArgs> | null;
    where?: Prisma.chat_treatmentWhereInput;
    orderBy?: Prisma.chat_treatmentOrderByWithRelationInput | Prisma.chat_treatmentOrderByWithRelationInput[];
    cursor?: Prisma.chat_treatmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Chat_treatmentScalarFieldEnum | Prisma.Chat_treatmentScalarFieldEnum[];
};
export type chat_treatmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chat_treatmentSelect<ExtArgs> | null;
    omit?: Prisma.chat_treatmentOmit<ExtArgs> | null;
    include?: Prisma.chat_treatmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.chat_treatmentCreateInput, Prisma.chat_treatmentUncheckedCreateInput>;
};
export type chat_treatmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.chat_treatmentCreateManyInput | Prisma.chat_treatmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type chat_treatmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chat_treatmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.chat_treatmentOmit<ExtArgs> | null;
    data: Prisma.chat_treatmentCreateManyInput | Prisma.chat_treatmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.chat_treatmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type chat_treatmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chat_treatmentSelect<ExtArgs> | null;
    omit?: Prisma.chat_treatmentOmit<ExtArgs> | null;
    include?: Prisma.chat_treatmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.chat_treatmentUpdateInput, Prisma.chat_treatmentUncheckedUpdateInput>;
    where: Prisma.chat_treatmentWhereUniqueInput;
};
export type chat_treatmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.chat_treatmentUpdateManyMutationInput, Prisma.chat_treatmentUncheckedUpdateManyInput>;
    where?: Prisma.chat_treatmentWhereInput;
    limit?: number;
};
export type chat_treatmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chat_treatmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.chat_treatmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.chat_treatmentUpdateManyMutationInput, Prisma.chat_treatmentUncheckedUpdateManyInput>;
    where?: Prisma.chat_treatmentWhereInput;
    limit?: number;
    include?: Prisma.chat_treatmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type chat_treatmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chat_treatmentSelect<ExtArgs> | null;
    omit?: Prisma.chat_treatmentOmit<ExtArgs> | null;
    include?: Prisma.chat_treatmentInclude<ExtArgs> | null;
    where: Prisma.chat_treatmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.chat_treatmentCreateInput, Prisma.chat_treatmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.chat_treatmentUpdateInput, Prisma.chat_treatmentUncheckedUpdateInput>;
};
export type chat_treatmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chat_treatmentSelect<ExtArgs> | null;
    omit?: Prisma.chat_treatmentOmit<ExtArgs> | null;
    include?: Prisma.chat_treatmentInclude<ExtArgs> | null;
    where: Prisma.chat_treatmentWhereUniqueInput;
};
export type chat_treatmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.chat_treatmentWhereInput;
    limit?: number;
};
export type chat_treatmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chat_treatmentSelect<ExtArgs> | null;
    omit?: Prisma.chat_treatmentOmit<ExtArgs> | null;
    include?: Prisma.chat_treatmentInclude<ExtArgs> | null;
};
