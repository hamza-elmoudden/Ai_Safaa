import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type paymentsModel = runtime.Types.Result.DefaultSelection<Prisma.$paymentsPayload>;
export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null;
    _avg: PaymentsAvgAggregateOutputType | null;
    _sum: PaymentsSumAggregateOutputType | null;
    _min: PaymentsMinAggregateOutputType | null;
    _max: PaymentsMaxAggregateOutputType | null;
};
export type PaymentsAvgAggregateOutputType = {
    amount_mad: runtime.Decimal | null;
};
export type PaymentsSumAggregateOutputType = {
    amount_mad: runtime.Decimal | null;
};
export type PaymentsMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    subscription_id: string | null;
    amount_mad: runtime.Decimal | null;
    method: $Enums.payment_method | null;
    status: $Enums.payment_status | null;
    provider_ref: string | null;
    starts_at: Date | null;
    expires_at: Date | null;
};
export type PaymentsMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    subscription_id: string | null;
    amount_mad: runtime.Decimal | null;
    method: $Enums.payment_method | null;
    status: $Enums.payment_status | null;
    provider_ref: string | null;
    starts_at: Date | null;
    expires_at: Date | null;
};
export type PaymentsCountAggregateOutputType = {
    id: number;
    user_id: number;
    subscription_id: number;
    amount_mad: number;
    method: number;
    status: number;
    provider_ref: number;
    provider_meta: number;
    starts_at: number;
    expires_at: number;
    _all: number;
};
export type PaymentsAvgAggregateInputType = {
    amount_mad?: true;
};
export type PaymentsSumAggregateInputType = {
    amount_mad?: true;
};
export type PaymentsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    subscription_id?: true;
    amount_mad?: true;
    method?: true;
    status?: true;
    provider_ref?: true;
    starts_at?: true;
    expires_at?: true;
};
export type PaymentsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    subscription_id?: true;
    amount_mad?: true;
    method?: true;
    status?: true;
    provider_ref?: true;
    starts_at?: true;
    expires_at?: true;
};
export type PaymentsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    subscription_id?: true;
    amount_mad?: true;
    method?: true;
    status?: true;
    provider_ref?: true;
    provider_meta?: true;
    starts_at?: true;
    expires_at?: true;
    _all?: true;
};
export type PaymentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithRelationInput | Prisma.paymentsOrderByWithRelationInput[];
    cursor?: Prisma.paymentsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentsCountAggregateInputType;
    _avg?: PaymentsAvgAggregateInputType;
    _sum?: PaymentsSumAggregateInputType;
    _min?: PaymentsMinAggregateInputType;
    _max?: PaymentsMaxAggregateInputType;
};
export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
    [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayments[P]> : Prisma.GetScalarType<T[P], AggregatePayments[P]>;
};
export type paymentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithAggregationInput | Prisma.paymentsOrderByWithAggregationInput[];
    by: Prisma.PaymentsScalarFieldEnum[] | Prisma.PaymentsScalarFieldEnum;
    having?: Prisma.paymentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentsCountAggregateInputType | true;
    _avg?: PaymentsAvgAggregateInputType;
    _sum?: PaymentsSumAggregateInputType;
    _min?: PaymentsMinAggregateInputType;
    _max?: PaymentsMaxAggregateInputType;
};
export type PaymentsGroupByOutputType = {
    id: string;
    user_id: string;
    subscription_id: string | null;
    amount_mad: runtime.Decimal;
    method: $Enums.payment_method;
    status: $Enums.payment_status;
    provider_ref: string | null;
    provider_meta: runtime.JsonValue | null;
    starts_at: Date | null;
    expires_at: Date | null;
    _count: PaymentsCountAggregateOutputType | null;
    _avg: PaymentsAvgAggregateOutputType | null;
    _sum: PaymentsSumAggregateOutputType | null;
    _min: PaymentsMinAggregateOutputType | null;
    _max: PaymentsMaxAggregateOutputType | null;
};
type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentsGroupByOutputType[P]>;
}>>;
export type paymentsWhereInput = {
    AND?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    OR?: Prisma.paymentsWhereInput[];
    NOT?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    id?: Prisma.UuidFilter<"payments"> | string;
    user_id?: Prisma.UuidFilter<"payments"> | string;
    subscription_id?: Prisma.UuidNullableFilter<"payments"> | string | null;
    amount_mad?: Prisma.DecimalFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.Enumpayment_methodFilter<"payments"> | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFilter<"payments"> | $Enums.payment_status;
    provider_ref?: Prisma.StringNullableFilter<"payments"> | string | null;
    provider_meta?: Prisma.JsonNullableFilter<"payments">;
    starts_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
    expires_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
    subscriptions?: Prisma.XOR<Prisma.SubscriptionsNullableScalarRelationFilter, Prisma.subscriptionsWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type paymentsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    subscription_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount_mad?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    provider_ref?: Prisma.SortOrderInput | Prisma.SortOrder;
    provider_meta?: Prisma.SortOrderInput | Prisma.SortOrder;
    starts_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    expires_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    subscriptions?: Prisma.subscriptionsOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    provider_ref?: string;
    AND?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    OR?: Prisma.paymentsWhereInput[];
    NOT?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    user_id?: Prisma.UuidFilter<"payments"> | string;
    subscription_id?: Prisma.UuidNullableFilter<"payments"> | string | null;
    amount_mad?: Prisma.DecimalFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.Enumpayment_methodFilter<"payments"> | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFilter<"payments"> | $Enums.payment_status;
    provider_meta?: Prisma.JsonNullableFilter<"payments">;
    starts_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
    expires_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
    subscriptions?: Prisma.XOR<Prisma.SubscriptionsNullableScalarRelationFilter, Prisma.subscriptionsWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id" | "provider_ref">;
export type paymentsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    subscription_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount_mad?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    provider_ref?: Prisma.SortOrderInput | Prisma.SortOrder;
    provider_meta?: Prisma.SortOrderInput | Prisma.SortOrder;
    starts_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    expires_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.paymentsCountOrderByAggregateInput;
    _avg?: Prisma.paymentsAvgOrderByAggregateInput;
    _max?: Prisma.paymentsMaxOrderByAggregateInput;
    _min?: Prisma.paymentsMinOrderByAggregateInput;
    _sum?: Prisma.paymentsSumOrderByAggregateInput;
};
export type paymentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.paymentsScalarWhereWithAggregatesInput | Prisma.paymentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.paymentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.paymentsScalarWhereWithAggregatesInput | Prisma.paymentsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"payments"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"payments"> | string;
    subscription_id?: Prisma.UuidNullableWithAggregatesFilter<"payments"> | string | null;
    amount_mad?: Prisma.DecimalWithAggregatesFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.Enumpayment_methodWithAggregatesFilter<"payments"> | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusWithAggregatesFilter<"payments"> | $Enums.payment_status;
    provider_ref?: Prisma.StringNullableWithAggregatesFilter<"payments"> | string | null;
    provider_meta?: Prisma.JsonNullableWithAggregatesFilter<"payments">;
    starts_at?: Prisma.DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null;
    expires_at?: Prisma.DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null;
};
export type paymentsCreateInput = {
    id?: string;
    amount_mad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.payment_method;
    status?: $Enums.payment_status;
    provider_ref?: string | null;
    provider_meta?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    starts_at?: Date | string | null;
    expires_at?: Date | string | null;
    subscriptions?: Prisma.subscriptionsCreateNestedOneWithoutPaymentsInput;
    users: Prisma.usersCreateNestedOneWithoutPaymentsInput;
};
export type paymentsUncheckedCreateInput = {
    id?: string;
    user_id: string;
    subscription_id?: string | null;
    amount_mad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.payment_method;
    status?: $Enums.payment_status;
    provider_ref?: string | null;
    provider_meta?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    starts_at?: Date | string | null;
    expires_at?: Date | string | null;
};
export type paymentsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount_mad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status;
    provider_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_meta?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    starts_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subscriptions?: Prisma.subscriptionsUpdateOneWithoutPaymentsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    subscription_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount_mad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status;
    provider_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_meta?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    starts_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type paymentsCreateManyInput = {
    id?: string;
    user_id: string;
    subscription_id?: string | null;
    amount_mad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.payment_method;
    status?: $Enums.payment_status;
    provider_ref?: string | null;
    provider_meta?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    starts_at?: Date | string | null;
    expires_at?: Date | string | null;
};
export type paymentsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount_mad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status;
    provider_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_meta?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    starts_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type paymentsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    subscription_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount_mad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status;
    provider_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_meta?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    starts_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type paymentsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    subscription_id?: Prisma.SortOrder;
    amount_mad?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    provider_ref?: Prisma.SortOrder;
    provider_meta?: Prisma.SortOrder;
    starts_at?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
};
export type paymentsAvgOrderByAggregateInput = {
    amount_mad?: Prisma.SortOrder;
};
export type paymentsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    subscription_id?: Prisma.SortOrder;
    amount_mad?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    provider_ref?: Prisma.SortOrder;
    starts_at?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
};
export type paymentsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    subscription_id?: Prisma.SortOrder;
    amount_mad?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    provider_ref?: Prisma.SortOrder;
    starts_at?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
};
export type paymentsSumOrderByAggregateInput = {
    amount_mad?: Prisma.SortOrder;
};
export type PaymentsListRelationFilter = {
    every?: Prisma.paymentsWhereInput;
    some?: Prisma.paymentsWhereInput;
    none?: Prisma.paymentsWhereInput;
};
export type paymentsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type Enumpayment_methodFieldUpdateOperationsInput = {
    set?: $Enums.payment_method;
};
export type Enumpayment_statusFieldUpdateOperationsInput = {
    set?: $Enums.payment_status;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type paymentsCreateNestedManyWithoutSubscriptionsInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutSubscriptionsInput, Prisma.paymentsUncheckedCreateWithoutSubscriptionsInput> | Prisma.paymentsCreateWithoutSubscriptionsInput[] | Prisma.paymentsUncheckedCreateWithoutSubscriptionsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutSubscriptionsInput | Prisma.paymentsCreateOrConnectWithoutSubscriptionsInput[];
    createMany?: Prisma.paymentsCreateManySubscriptionsInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUncheckedCreateNestedManyWithoutSubscriptionsInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutSubscriptionsInput, Prisma.paymentsUncheckedCreateWithoutSubscriptionsInput> | Prisma.paymentsCreateWithoutSubscriptionsInput[] | Prisma.paymentsUncheckedCreateWithoutSubscriptionsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutSubscriptionsInput | Prisma.paymentsCreateOrConnectWithoutSubscriptionsInput[];
    createMany?: Prisma.paymentsCreateManySubscriptionsInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUpdateManyWithoutSubscriptionsNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutSubscriptionsInput, Prisma.paymentsUncheckedCreateWithoutSubscriptionsInput> | Prisma.paymentsCreateWithoutSubscriptionsInput[] | Prisma.paymentsUncheckedCreateWithoutSubscriptionsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutSubscriptionsInput | Prisma.paymentsCreateOrConnectWithoutSubscriptionsInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutSubscriptionsInput | Prisma.paymentsUpsertWithWhereUniqueWithoutSubscriptionsInput[];
    createMany?: Prisma.paymentsCreateManySubscriptionsInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutSubscriptionsInput | Prisma.paymentsUpdateWithWhereUniqueWithoutSubscriptionsInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutSubscriptionsInput | Prisma.paymentsUpdateManyWithWhereWithoutSubscriptionsInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsUncheckedUpdateManyWithoutSubscriptionsNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutSubscriptionsInput, Prisma.paymentsUncheckedCreateWithoutSubscriptionsInput> | Prisma.paymentsCreateWithoutSubscriptionsInput[] | Prisma.paymentsUncheckedCreateWithoutSubscriptionsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutSubscriptionsInput | Prisma.paymentsCreateOrConnectWithoutSubscriptionsInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutSubscriptionsInput | Prisma.paymentsUpsertWithWhereUniqueWithoutSubscriptionsInput[];
    createMany?: Prisma.paymentsCreateManySubscriptionsInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutSubscriptionsInput | Prisma.paymentsUpdateWithWhereUniqueWithoutSubscriptionsInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutSubscriptionsInput | Prisma.paymentsUpdateManyWithWhereWithoutSubscriptionsInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutUsersInput, Prisma.paymentsUncheckedCreateWithoutUsersInput> | Prisma.paymentsCreateWithoutUsersInput[] | Prisma.paymentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutUsersInput | Prisma.paymentsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.paymentsCreateManyUsersInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutUsersInput, Prisma.paymentsUncheckedCreateWithoutUsersInput> | Prisma.paymentsCreateWithoutUsersInput[] | Prisma.paymentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutUsersInput | Prisma.paymentsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.paymentsCreateManyUsersInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutUsersInput, Prisma.paymentsUncheckedCreateWithoutUsersInput> | Prisma.paymentsCreateWithoutUsersInput[] | Prisma.paymentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutUsersInput | Prisma.paymentsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutUsersInput | Prisma.paymentsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.paymentsCreateManyUsersInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutUsersInput | Prisma.paymentsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutUsersInput | Prisma.paymentsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutUsersInput, Prisma.paymentsUncheckedCreateWithoutUsersInput> | Prisma.paymentsCreateWithoutUsersInput[] | Prisma.paymentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutUsersInput | Prisma.paymentsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutUsersInput | Prisma.paymentsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.paymentsCreateManyUsersInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutUsersInput | Prisma.paymentsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutUsersInput | Prisma.paymentsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsCreateWithoutSubscriptionsInput = {
    id?: string;
    amount_mad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.payment_method;
    status?: $Enums.payment_status;
    provider_ref?: string | null;
    provider_meta?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    starts_at?: Date | string | null;
    expires_at?: Date | string | null;
    users: Prisma.usersCreateNestedOneWithoutPaymentsInput;
};
export type paymentsUncheckedCreateWithoutSubscriptionsInput = {
    id?: string;
    user_id: string;
    amount_mad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.payment_method;
    status?: $Enums.payment_status;
    provider_ref?: string | null;
    provider_meta?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    starts_at?: Date | string | null;
    expires_at?: Date | string | null;
};
export type paymentsCreateOrConnectWithoutSubscriptionsInput = {
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutSubscriptionsInput, Prisma.paymentsUncheckedCreateWithoutSubscriptionsInput>;
};
export type paymentsCreateManySubscriptionsInputEnvelope = {
    data: Prisma.paymentsCreateManySubscriptionsInput | Prisma.paymentsCreateManySubscriptionsInput[];
    skipDuplicates?: boolean;
};
export type paymentsUpsertWithWhereUniqueWithoutSubscriptionsInput = {
    where: Prisma.paymentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.paymentsUpdateWithoutSubscriptionsInput, Prisma.paymentsUncheckedUpdateWithoutSubscriptionsInput>;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutSubscriptionsInput, Prisma.paymentsUncheckedCreateWithoutSubscriptionsInput>;
};
export type paymentsUpdateWithWhereUniqueWithoutSubscriptionsInput = {
    where: Prisma.paymentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.paymentsUpdateWithoutSubscriptionsInput, Prisma.paymentsUncheckedUpdateWithoutSubscriptionsInput>;
};
export type paymentsUpdateManyWithWhereWithoutSubscriptionsInput = {
    where: Prisma.paymentsScalarWhereInput;
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyWithoutSubscriptionsInput>;
};
export type paymentsScalarWhereInput = {
    AND?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
    OR?: Prisma.paymentsScalarWhereInput[];
    NOT?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
    id?: Prisma.UuidFilter<"payments"> | string;
    user_id?: Prisma.UuidFilter<"payments"> | string;
    subscription_id?: Prisma.UuidNullableFilter<"payments"> | string | null;
    amount_mad?: Prisma.DecimalFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.Enumpayment_methodFilter<"payments"> | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFilter<"payments"> | $Enums.payment_status;
    provider_ref?: Prisma.StringNullableFilter<"payments"> | string | null;
    provider_meta?: Prisma.JsonNullableFilter<"payments">;
    starts_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
    expires_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
};
export type paymentsCreateWithoutUsersInput = {
    id?: string;
    amount_mad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.payment_method;
    status?: $Enums.payment_status;
    provider_ref?: string | null;
    provider_meta?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    starts_at?: Date | string | null;
    expires_at?: Date | string | null;
    subscriptions?: Prisma.subscriptionsCreateNestedOneWithoutPaymentsInput;
};
export type paymentsUncheckedCreateWithoutUsersInput = {
    id?: string;
    subscription_id?: string | null;
    amount_mad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.payment_method;
    status?: $Enums.payment_status;
    provider_ref?: string | null;
    provider_meta?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    starts_at?: Date | string | null;
    expires_at?: Date | string | null;
};
export type paymentsCreateOrConnectWithoutUsersInput = {
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutUsersInput, Prisma.paymentsUncheckedCreateWithoutUsersInput>;
};
export type paymentsCreateManyUsersInputEnvelope = {
    data: Prisma.paymentsCreateManyUsersInput | Prisma.paymentsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type paymentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.paymentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.paymentsUpdateWithoutUsersInput, Prisma.paymentsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutUsersInput, Prisma.paymentsUncheckedCreateWithoutUsersInput>;
};
export type paymentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.paymentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.paymentsUpdateWithoutUsersInput, Prisma.paymentsUncheckedUpdateWithoutUsersInput>;
};
export type paymentsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.paymentsScalarWhereInput;
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyWithoutUsersInput>;
};
export type paymentsCreateManySubscriptionsInput = {
    id?: string;
    user_id: string;
    amount_mad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.payment_method;
    status?: $Enums.payment_status;
    provider_ref?: string | null;
    provider_meta?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    starts_at?: Date | string | null;
    expires_at?: Date | string | null;
};
export type paymentsUpdateWithoutSubscriptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount_mad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status;
    provider_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_meta?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    starts_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneRequiredWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateWithoutSubscriptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount_mad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status;
    provider_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_meta?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    starts_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type paymentsUncheckedUpdateManyWithoutSubscriptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount_mad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status;
    provider_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_meta?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    starts_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type paymentsCreateManyUsersInput = {
    id?: string;
    subscription_id?: string | null;
    amount_mad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.payment_method;
    status?: $Enums.payment_status;
    provider_ref?: string | null;
    provider_meta?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    starts_at?: Date | string | null;
    expires_at?: Date | string | null;
};
export type paymentsUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount_mad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status;
    provider_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_meta?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    starts_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subscriptions?: Prisma.subscriptionsUpdateOneWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subscription_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount_mad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status;
    provider_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_meta?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    starts_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type paymentsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subscription_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount_mad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status;
    provider_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_meta?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    starts_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type paymentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    subscription_id?: boolean;
    amount_mad?: boolean;
    method?: boolean;
    status?: boolean;
    provider_ref?: boolean;
    provider_meta?: boolean;
    starts_at?: boolean;
    expires_at?: boolean;
    subscriptions?: boolean | Prisma.payments$subscriptionsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type paymentsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    subscription_id?: boolean;
    amount_mad?: boolean;
    method?: boolean;
    status?: boolean;
    provider_ref?: boolean;
    provider_meta?: boolean;
    starts_at?: boolean;
    expires_at?: boolean;
    subscriptions?: boolean | Prisma.payments$subscriptionsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type paymentsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    subscription_id?: boolean;
    amount_mad?: boolean;
    method?: boolean;
    status?: boolean;
    provider_ref?: boolean;
    provider_meta?: boolean;
    starts_at?: boolean;
    expires_at?: boolean;
    subscriptions?: boolean | Prisma.payments$subscriptionsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type paymentsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    subscription_id?: boolean;
    amount_mad?: boolean;
    method?: boolean;
    status?: boolean;
    provider_ref?: boolean;
    provider_meta?: boolean;
    starts_at?: boolean;
    expires_at?: boolean;
};
export type paymentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "subscription_id" | "amount_mad" | "method" | "status" | "provider_ref" | "provider_meta" | "starts_at" | "expires_at", ExtArgs["result"]["payments"]>;
export type paymentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subscriptions?: boolean | Prisma.payments$subscriptionsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type paymentsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subscriptions?: boolean | Prisma.payments$subscriptionsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type paymentsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subscriptions?: boolean | Prisma.payments$subscriptionsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $paymentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "payments";
    objects: {
        subscriptions: Prisma.$subscriptionsPayload<ExtArgs> | null;
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        subscription_id: string | null;
        amount_mad: runtime.Decimal;
        method: $Enums.payment_method;
        status: $Enums.payment_status;
        provider_ref: string | null;
        provider_meta: runtime.JsonValue | null;
        starts_at: Date | null;
        expires_at: Date | null;
    }, ExtArgs["result"]["payments"]>;
    composites: {};
};
export type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$paymentsPayload, S>;
export type paymentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentsCountAggregateInputType | true;
};
export interface paymentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['payments'];
        meta: {
            name: 'payments';
        };
    };
    findUnique<T extends paymentsFindUniqueArgs>(args: Prisma.SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends paymentsFindFirstArgs>(args?: Prisma.SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends paymentsFindManyArgs>(args?: Prisma.SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends paymentsCreateArgs>(args: Prisma.SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends paymentsCreateManyArgs>(args?: Prisma.SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends paymentsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends paymentsDeleteArgs>(args: Prisma.SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends paymentsUpdateArgs>(args: Prisma.SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends paymentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends paymentsUpdateManyArgs>(args: Prisma.SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends paymentsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends paymentsUpsertArgs>(args: Prisma.SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends paymentsCountArgs>(args?: Prisma.Subset<T, paymentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentsCountAggregateOutputType> : number>;
    aggregate<T extends PaymentsAggregateArgs>(args: Prisma.Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>;
    groupBy<T extends paymentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: paymentsGroupByArgs['orderBy'];
    } : {
        orderBy?: paymentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: paymentsFieldRefs;
}
export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    subscriptions<T extends Prisma.payments$subscriptionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.payments$subscriptionsArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface paymentsFieldRefs {
    readonly id: Prisma.FieldRef<"payments", 'String'>;
    readonly user_id: Prisma.FieldRef<"payments", 'String'>;
    readonly subscription_id: Prisma.FieldRef<"payments", 'String'>;
    readonly amount_mad: Prisma.FieldRef<"payments", 'Decimal'>;
    readonly method: Prisma.FieldRef<"payments", 'payment_method'>;
    readonly status: Prisma.FieldRef<"payments", 'payment_status'>;
    readonly provider_ref: Prisma.FieldRef<"payments", 'String'>;
    readonly provider_meta: Prisma.FieldRef<"payments", 'Json'>;
    readonly starts_at: Prisma.FieldRef<"payments", 'DateTime'>;
    readonly expires_at: Prisma.FieldRef<"payments", 'DateTime'>;
}
export type paymentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithRelationInput | Prisma.paymentsOrderByWithRelationInput[];
    cursor?: Prisma.paymentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentsScalarFieldEnum | Prisma.PaymentsScalarFieldEnum[];
};
export type paymentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithRelationInput | Prisma.paymentsOrderByWithRelationInput[];
    cursor?: Prisma.paymentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentsScalarFieldEnum | Prisma.PaymentsScalarFieldEnum[];
};
export type paymentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithRelationInput | Prisma.paymentsOrderByWithRelationInput[];
    cursor?: Prisma.paymentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentsScalarFieldEnum | Prisma.PaymentsScalarFieldEnum[];
};
export type paymentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentsCreateInput, Prisma.paymentsUncheckedCreateInput>;
};
export type paymentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.paymentsCreateManyInput | Prisma.paymentsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type paymentsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    data: Prisma.paymentsCreateManyInput | Prisma.paymentsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.paymentsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type paymentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentsUpdateInput, Prisma.paymentsUncheckedUpdateInput>;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyInput>;
    where?: Prisma.paymentsWhereInput;
    limit?: number;
};
export type paymentsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyInput>;
    where?: Prisma.paymentsWhereInput;
    limit?: number;
    include?: Prisma.paymentsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type paymentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateInput, Prisma.paymentsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.paymentsUpdateInput, Prisma.paymentsUncheckedUpdateInput>;
};
export type paymentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
    limit?: number;
};
export type payments$subscriptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
    where?: Prisma.subscriptionsWhereInput;
};
export type paymentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
};
export {};
