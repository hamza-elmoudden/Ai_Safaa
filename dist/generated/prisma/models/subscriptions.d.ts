import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type subscriptionsModel = runtime.Types.Result.DefaultSelection<Prisma.$subscriptionsPayload>;
export type AggregateSubscriptions = {
    _count: SubscriptionsCountAggregateOutputType | null;
    _avg: SubscriptionsAvgAggregateOutputType | null;
    _sum: SubscriptionsSumAggregateOutputType | null;
    _min: SubscriptionsMinAggregateOutputType | null;
    _max: SubscriptionsMaxAggregateOutputType | null;
};
export type SubscriptionsAvgAggregateOutputType = {
    price_mad: runtime.Decimal | null;
    limit_photo_treatment: number | null;
    treatment_plans: number | null;
    limit_photo_check: number | null;
};
export type SubscriptionsSumAggregateOutputType = {
    price_mad: runtime.Decimal | null;
    limit_photo_treatment: number | null;
    treatment_plans: number | null;
    limit_photo_check: number | null;
};
export type SubscriptionsMinAggregateOutputType = {
    id: string | null;
    name: $Enums.plan_name | null;
    price_mad: runtime.Decimal | null;
    limit_photo_treatment: number | null;
    treatment_plans: number | null;
    limit_photo_check: number | null;
    progress_tracking: boolean | null;
    vip_consultation: boolean | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type SubscriptionsMaxAggregateOutputType = {
    id: string | null;
    name: $Enums.plan_name | null;
    price_mad: runtime.Decimal | null;
    limit_photo_treatment: number | null;
    treatment_plans: number | null;
    limit_photo_check: number | null;
    progress_tracking: boolean | null;
    vip_consultation: boolean | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type SubscriptionsCountAggregateOutputType = {
    id: number;
    name: number;
    price_mad: number;
    limit_photo_treatment: number;
    treatment_plans: number;
    limit_photo_check: number;
    progress_tracking: number;
    vip_consultation: number;
    features: number;
    is_active: number;
    created_at: number;
    _all: number;
};
export type SubscriptionsAvgAggregateInputType = {
    price_mad?: true;
    limit_photo_treatment?: true;
    treatment_plans?: true;
    limit_photo_check?: true;
};
export type SubscriptionsSumAggregateInputType = {
    price_mad?: true;
    limit_photo_treatment?: true;
    treatment_plans?: true;
    limit_photo_check?: true;
};
export type SubscriptionsMinAggregateInputType = {
    id?: true;
    name?: true;
    price_mad?: true;
    limit_photo_treatment?: true;
    treatment_plans?: true;
    limit_photo_check?: true;
    progress_tracking?: true;
    vip_consultation?: true;
    is_active?: true;
    created_at?: true;
};
export type SubscriptionsMaxAggregateInputType = {
    id?: true;
    name?: true;
    price_mad?: true;
    limit_photo_treatment?: true;
    treatment_plans?: true;
    limit_photo_check?: true;
    progress_tracking?: true;
    vip_consultation?: true;
    is_active?: true;
    created_at?: true;
};
export type SubscriptionsCountAggregateInputType = {
    id?: true;
    name?: true;
    price_mad?: true;
    limit_photo_treatment?: true;
    treatment_plans?: true;
    limit_photo_check?: true;
    progress_tracking?: true;
    vip_consultation?: true;
    features?: true;
    is_active?: true;
    created_at?: true;
    _all?: true;
};
export type SubscriptionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscriptionsWhereInput;
    orderBy?: Prisma.subscriptionsOrderByWithRelationInput | Prisma.subscriptionsOrderByWithRelationInput[];
    cursor?: Prisma.subscriptionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SubscriptionsCountAggregateInputType;
    _avg?: SubscriptionsAvgAggregateInputType;
    _sum?: SubscriptionsSumAggregateInputType;
    _min?: SubscriptionsMinAggregateInputType;
    _max?: SubscriptionsMaxAggregateInputType;
};
export type GetSubscriptionsAggregateType<T extends SubscriptionsAggregateArgs> = {
    [P in keyof T & keyof AggregateSubscriptions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubscriptions[P]> : Prisma.GetScalarType<T[P], AggregateSubscriptions[P]>;
};
export type subscriptionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscriptionsWhereInput;
    orderBy?: Prisma.subscriptionsOrderByWithAggregationInput | Prisma.subscriptionsOrderByWithAggregationInput[];
    by: Prisma.SubscriptionsScalarFieldEnum[] | Prisma.SubscriptionsScalarFieldEnum;
    having?: Prisma.subscriptionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubscriptionsCountAggregateInputType | true;
    _avg?: SubscriptionsAvgAggregateInputType;
    _sum?: SubscriptionsSumAggregateInputType;
    _min?: SubscriptionsMinAggregateInputType;
    _max?: SubscriptionsMaxAggregateInputType;
};
export type SubscriptionsGroupByOutputType = {
    id: string;
    name: $Enums.plan_name;
    price_mad: runtime.Decimal;
    limit_photo_treatment: number;
    treatment_plans: number;
    limit_photo_check: number;
    progress_tracking: boolean;
    vip_consultation: boolean;
    features: runtime.JsonValue;
    is_active: boolean;
    created_at: Date;
    _count: SubscriptionsCountAggregateOutputType | null;
    _avg: SubscriptionsAvgAggregateOutputType | null;
    _sum: SubscriptionsSumAggregateOutputType | null;
    _min: SubscriptionsMinAggregateOutputType | null;
    _max: SubscriptionsMaxAggregateOutputType | null;
};
type GetSubscriptionsGroupByPayload<T extends subscriptionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SubscriptionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SubscriptionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SubscriptionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>;
}>>;
export type subscriptionsWhereInput = {
    AND?: Prisma.subscriptionsWhereInput | Prisma.subscriptionsWhereInput[];
    OR?: Prisma.subscriptionsWhereInput[];
    NOT?: Prisma.subscriptionsWhereInput | Prisma.subscriptionsWhereInput[];
    id?: Prisma.UuidFilter<"subscriptions"> | string;
    name?: Prisma.Enumplan_nameFilter<"subscriptions"> | $Enums.plan_name;
    price_mad?: Prisma.DecimalFilter<"subscriptions"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    limit_photo_treatment?: Prisma.IntFilter<"subscriptions"> | number;
    treatment_plans?: Prisma.IntFilter<"subscriptions"> | number;
    limit_photo_check?: Prisma.IntFilter<"subscriptions"> | number;
    progress_tracking?: Prisma.BoolFilter<"subscriptions"> | boolean;
    vip_consultation?: Prisma.BoolFilter<"subscriptions"> | boolean;
    features?: Prisma.JsonFilter<"subscriptions">;
    is_active?: Prisma.BoolFilter<"subscriptions"> | boolean;
    created_at?: Prisma.DateTimeFilter<"subscriptions"> | Date | string;
    payments?: Prisma.PaymentsListRelationFilter;
};
export type subscriptionsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price_mad?: Prisma.SortOrder;
    limit_photo_treatment?: Prisma.SortOrder;
    treatment_plans?: Prisma.SortOrder;
    limit_photo_check?: Prisma.SortOrder;
    progress_tracking?: Prisma.SortOrder;
    vip_consultation?: Prisma.SortOrder;
    features?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    payments?: Prisma.paymentsOrderByRelationAggregateInput;
};
export type subscriptionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: $Enums.plan_name;
    AND?: Prisma.subscriptionsWhereInput | Prisma.subscriptionsWhereInput[];
    OR?: Prisma.subscriptionsWhereInput[];
    NOT?: Prisma.subscriptionsWhereInput | Prisma.subscriptionsWhereInput[];
    price_mad?: Prisma.DecimalFilter<"subscriptions"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    limit_photo_treatment?: Prisma.IntFilter<"subscriptions"> | number;
    treatment_plans?: Prisma.IntFilter<"subscriptions"> | number;
    limit_photo_check?: Prisma.IntFilter<"subscriptions"> | number;
    progress_tracking?: Prisma.BoolFilter<"subscriptions"> | boolean;
    vip_consultation?: Prisma.BoolFilter<"subscriptions"> | boolean;
    features?: Prisma.JsonFilter<"subscriptions">;
    is_active?: Prisma.BoolFilter<"subscriptions"> | boolean;
    created_at?: Prisma.DateTimeFilter<"subscriptions"> | Date | string;
    payments?: Prisma.PaymentsListRelationFilter;
}, "id" | "name">;
export type subscriptionsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price_mad?: Prisma.SortOrder;
    limit_photo_treatment?: Prisma.SortOrder;
    treatment_plans?: Prisma.SortOrder;
    limit_photo_check?: Prisma.SortOrder;
    progress_tracking?: Prisma.SortOrder;
    vip_consultation?: Prisma.SortOrder;
    features?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.subscriptionsCountOrderByAggregateInput;
    _avg?: Prisma.subscriptionsAvgOrderByAggregateInput;
    _max?: Prisma.subscriptionsMaxOrderByAggregateInput;
    _min?: Prisma.subscriptionsMinOrderByAggregateInput;
    _sum?: Prisma.subscriptionsSumOrderByAggregateInput;
};
export type subscriptionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.subscriptionsScalarWhereWithAggregatesInput | Prisma.subscriptionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.subscriptionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.subscriptionsScalarWhereWithAggregatesInput | Prisma.subscriptionsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"subscriptions"> | string;
    name?: Prisma.Enumplan_nameWithAggregatesFilter<"subscriptions"> | $Enums.plan_name;
    price_mad?: Prisma.DecimalWithAggregatesFilter<"subscriptions"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    limit_photo_treatment?: Prisma.IntWithAggregatesFilter<"subscriptions"> | number;
    treatment_plans?: Prisma.IntWithAggregatesFilter<"subscriptions"> | number;
    limit_photo_check?: Prisma.IntWithAggregatesFilter<"subscriptions"> | number;
    progress_tracking?: Prisma.BoolWithAggregatesFilter<"subscriptions"> | boolean;
    vip_consultation?: Prisma.BoolWithAggregatesFilter<"subscriptions"> | boolean;
    features?: Prisma.JsonWithAggregatesFilter<"subscriptions">;
    is_active?: Prisma.BoolWithAggregatesFilter<"subscriptions"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"subscriptions"> | Date | string;
};
export type subscriptionsCreateInput = {
    id?: string;
    name: $Enums.plan_name;
    price_mad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    limit_photo_treatment?: number;
    treatment_plans?: number;
    limit_photo_check?: number;
    progress_tracking?: boolean;
    vip_consultation?: boolean;
    features?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: boolean;
    created_at?: Date | string;
    payments?: Prisma.paymentsCreateNestedManyWithoutSubscriptionsInput;
};
export type subscriptionsUncheckedCreateInput = {
    id?: string;
    name: $Enums.plan_name;
    price_mad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    limit_photo_treatment?: number;
    treatment_plans?: number;
    limit_photo_check?: number;
    progress_tracking?: boolean;
    vip_consultation?: boolean;
    features?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: boolean;
    created_at?: Date | string;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutSubscriptionsInput;
};
export type subscriptionsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.Enumplan_nameFieldUpdateOperationsInput | $Enums.plan_name;
    price_mad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    limit_photo_treatment?: Prisma.IntFieldUpdateOperationsInput | number;
    treatment_plans?: Prisma.IntFieldUpdateOperationsInput | number;
    limit_photo_check?: Prisma.IntFieldUpdateOperationsInput | number;
    progress_tracking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    vip_consultation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    features?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.paymentsUpdateManyWithoutSubscriptionsNestedInput;
};
export type subscriptionsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.Enumplan_nameFieldUpdateOperationsInput | $Enums.plan_name;
    price_mad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    limit_photo_treatment?: Prisma.IntFieldUpdateOperationsInput | number;
    treatment_plans?: Prisma.IntFieldUpdateOperationsInput | number;
    limit_photo_check?: Prisma.IntFieldUpdateOperationsInput | number;
    progress_tracking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    vip_consultation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    features?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutSubscriptionsNestedInput;
};
export type subscriptionsCreateManyInput = {
    id?: string;
    name: $Enums.plan_name;
    price_mad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    limit_photo_treatment?: number;
    treatment_plans?: number;
    limit_photo_check?: number;
    progress_tracking?: boolean;
    vip_consultation?: boolean;
    features?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: boolean;
    created_at?: Date | string;
};
export type subscriptionsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.Enumplan_nameFieldUpdateOperationsInput | $Enums.plan_name;
    price_mad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    limit_photo_treatment?: Prisma.IntFieldUpdateOperationsInput | number;
    treatment_plans?: Prisma.IntFieldUpdateOperationsInput | number;
    limit_photo_check?: Prisma.IntFieldUpdateOperationsInput | number;
    progress_tracking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    vip_consultation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    features?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subscriptionsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.Enumplan_nameFieldUpdateOperationsInput | $Enums.plan_name;
    price_mad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    limit_photo_treatment?: Prisma.IntFieldUpdateOperationsInput | number;
    treatment_plans?: Prisma.IntFieldUpdateOperationsInput | number;
    limit_photo_check?: Prisma.IntFieldUpdateOperationsInput | number;
    progress_tracking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    vip_consultation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    features?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionsNullableScalarRelationFilter = {
    is?: Prisma.subscriptionsWhereInput | null;
    isNot?: Prisma.subscriptionsWhereInput | null;
};
export type subscriptionsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price_mad?: Prisma.SortOrder;
    limit_photo_treatment?: Prisma.SortOrder;
    treatment_plans?: Prisma.SortOrder;
    limit_photo_check?: Prisma.SortOrder;
    progress_tracking?: Prisma.SortOrder;
    vip_consultation?: Prisma.SortOrder;
    features?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type subscriptionsAvgOrderByAggregateInput = {
    price_mad?: Prisma.SortOrder;
    limit_photo_treatment?: Prisma.SortOrder;
    treatment_plans?: Prisma.SortOrder;
    limit_photo_check?: Prisma.SortOrder;
};
export type subscriptionsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price_mad?: Prisma.SortOrder;
    limit_photo_treatment?: Prisma.SortOrder;
    treatment_plans?: Prisma.SortOrder;
    limit_photo_check?: Prisma.SortOrder;
    progress_tracking?: Prisma.SortOrder;
    vip_consultation?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type subscriptionsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price_mad?: Prisma.SortOrder;
    limit_photo_treatment?: Prisma.SortOrder;
    treatment_plans?: Prisma.SortOrder;
    limit_photo_check?: Prisma.SortOrder;
    progress_tracking?: Prisma.SortOrder;
    vip_consultation?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type subscriptionsSumOrderByAggregateInput = {
    price_mad?: Prisma.SortOrder;
    limit_photo_treatment?: Prisma.SortOrder;
    treatment_plans?: Prisma.SortOrder;
    limit_photo_check?: Prisma.SortOrder;
};
export type subscriptionsCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.subscriptionsCreateWithoutPaymentsInput, Prisma.subscriptionsUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.subscriptionsCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.subscriptionsWhereUniqueInput;
};
export type subscriptionsUpdateOneWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.subscriptionsCreateWithoutPaymentsInput, Prisma.subscriptionsUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.subscriptionsCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.subscriptionsUpsertWithoutPaymentsInput;
    disconnect?: Prisma.subscriptionsWhereInput | boolean;
    delete?: Prisma.subscriptionsWhereInput | boolean;
    connect?: Prisma.subscriptionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.subscriptionsUpdateToOneWithWhereWithoutPaymentsInput, Prisma.subscriptionsUpdateWithoutPaymentsInput>, Prisma.subscriptionsUncheckedUpdateWithoutPaymentsInput>;
};
export type Enumplan_nameFieldUpdateOperationsInput = {
    set?: $Enums.plan_name;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type subscriptionsCreateWithoutPaymentsInput = {
    id?: string;
    name: $Enums.plan_name;
    price_mad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    limit_photo_treatment?: number;
    treatment_plans?: number;
    limit_photo_check?: number;
    progress_tracking?: boolean;
    vip_consultation?: boolean;
    features?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: boolean;
    created_at?: Date | string;
};
export type subscriptionsUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    name: $Enums.plan_name;
    price_mad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    limit_photo_treatment?: number;
    treatment_plans?: number;
    limit_photo_check?: number;
    progress_tracking?: boolean;
    vip_consultation?: boolean;
    features?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: boolean;
    created_at?: Date | string;
};
export type subscriptionsCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.subscriptionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.subscriptionsCreateWithoutPaymentsInput, Prisma.subscriptionsUncheckedCreateWithoutPaymentsInput>;
};
export type subscriptionsUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.subscriptionsUpdateWithoutPaymentsInput, Prisma.subscriptionsUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.subscriptionsCreateWithoutPaymentsInput, Prisma.subscriptionsUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.subscriptionsWhereInput;
};
export type subscriptionsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.subscriptionsWhereInput;
    data: Prisma.XOR<Prisma.subscriptionsUpdateWithoutPaymentsInput, Prisma.subscriptionsUncheckedUpdateWithoutPaymentsInput>;
};
export type subscriptionsUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.Enumplan_nameFieldUpdateOperationsInput | $Enums.plan_name;
    price_mad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    limit_photo_treatment?: Prisma.IntFieldUpdateOperationsInput | number;
    treatment_plans?: Prisma.IntFieldUpdateOperationsInput | number;
    limit_photo_check?: Prisma.IntFieldUpdateOperationsInput | number;
    progress_tracking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    vip_consultation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    features?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subscriptionsUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.Enumplan_nameFieldUpdateOperationsInput | $Enums.plan_name;
    price_mad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    limit_photo_treatment?: Prisma.IntFieldUpdateOperationsInput | number;
    treatment_plans?: Prisma.IntFieldUpdateOperationsInput | number;
    limit_photo_check?: Prisma.IntFieldUpdateOperationsInput | number;
    progress_tracking?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    vip_consultation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    features?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionsCountOutputType = {
    payments: number;
};
export type SubscriptionsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payments?: boolean | SubscriptionsCountOutputTypeCountPaymentsArgs;
};
export type SubscriptionsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionsCountOutputTypeSelect<ExtArgs> | null;
};
export type SubscriptionsCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
};
export type subscriptionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    price_mad?: boolean;
    limit_photo_treatment?: boolean;
    treatment_plans?: boolean;
    limit_photo_check?: boolean;
    progress_tracking?: boolean;
    vip_consultation?: boolean;
    features?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    payments?: boolean | Prisma.subscriptions$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.SubscriptionsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subscriptions"]>;
export type subscriptionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    price_mad?: boolean;
    limit_photo_treatment?: boolean;
    treatment_plans?: boolean;
    limit_photo_check?: boolean;
    progress_tracking?: boolean;
    vip_consultation?: boolean;
    features?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["subscriptions"]>;
export type subscriptionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    price_mad?: boolean;
    limit_photo_treatment?: boolean;
    treatment_plans?: boolean;
    limit_photo_check?: boolean;
    progress_tracking?: boolean;
    vip_consultation?: boolean;
    features?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["subscriptions"]>;
export type subscriptionsSelectScalar = {
    id?: boolean;
    name?: boolean;
    price_mad?: boolean;
    limit_photo_treatment?: boolean;
    treatment_plans?: boolean;
    limit_photo_check?: boolean;
    progress_tracking?: boolean;
    vip_consultation?: boolean;
    features?: boolean;
    is_active?: boolean;
    created_at?: boolean;
};
export type subscriptionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "price_mad" | "limit_photo_treatment" | "treatment_plans" | "limit_photo_check" | "progress_tracking" | "vip_consultation" | "features" | "is_active" | "created_at", ExtArgs["result"]["subscriptions"]>;
export type subscriptionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payments?: boolean | Prisma.subscriptions$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.SubscriptionsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type subscriptionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type subscriptionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $subscriptionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "subscriptions";
    objects: {
        payments: Prisma.$paymentsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: $Enums.plan_name;
        price_mad: runtime.Decimal;
        limit_photo_treatment: number;
        treatment_plans: number;
        limit_photo_check: number;
        progress_tracking: boolean;
        vip_consultation: boolean;
        features: runtime.JsonValue;
        is_active: boolean;
        created_at: Date;
    }, ExtArgs["result"]["subscriptions"]>;
    composites: {};
};
export type subscriptionsGetPayload<S extends boolean | null | undefined | subscriptionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload, S>;
export type subscriptionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<subscriptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubscriptionsCountAggregateInputType | true;
};
export interface subscriptionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['subscriptions'];
        meta: {
            name: 'subscriptions';
        };
    };
    findUnique<T extends subscriptionsFindUniqueArgs>(args: Prisma.SelectSubset<T, subscriptionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends subscriptionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, subscriptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends subscriptionsFindFirstArgs>(args?: Prisma.SelectSubset<T, subscriptionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends subscriptionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, subscriptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends subscriptionsFindManyArgs>(args?: Prisma.SelectSubset<T, subscriptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends subscriptionsCreateArgs>(args: Prisma.SelectSubset<T, subscriptionsCreateArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends subscriptionsCreateManyArgs>(args?: Prisma.SelectSubset<T, subscriptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends subscriptionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, subscriptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends subscriptionsDeleteArgs>(args: Prisma.SelectSubset<T, subscriptionsDeleteArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends subscriptionsUpdateArgs>(args: Prisma.SelectSubset<T, subscriptionsUpdateArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends subscriptionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, subscriptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends subscriptionsUpdateManyArgs>(args: Prisma.SelectSubset<T, subscriptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends subscriptionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, subscriptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends subscriptionsUpsertArgs>(args: Prisma.SelectSubset<T, subscriptionsUpsertArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends subscriptionsCountArgs>(args?: Prisma.Subset<T, subscriptionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SubscriptionsCountAggregateOutputType> : number>;
    aggregate<T extends SubscriptionsAggregateArgs>(args: Prisma.Subset<T, SubscriptionsAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionsAggregateType<T>>;
    groupBy<T extends subscriptionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: subscriptionsGroupByArgs['orderBy'];
    } : {
        orderBy?: subscriptionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, subscriptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: subscriptionsFieldRefs;
}
export interface Prisma__subscriptionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    payments<T extends Prisma.subscriptions$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.subscriptions$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface subscriptionsFieldRefs {
    readonly id: Prisma.FieldRef<"subscriptions", 'String'>;
    readonly name: Prisma.FieldRef<"subscriptions", 'plan_name'>;
    readonly price_mad: Prisma.FieldRef<"subscriptions", 'Decimal'>;
    readonly limit_photo_treatment: Prisma.FieldRef<"subscriptions", 'Int'>;
    readonly treatment_plans: Prisma.FieldRef<"subscriptions", 'Int'>;
    readonly limit_photo_check: Prisma.FieldRef<"subscriptions", 'Int'>;
    readonly progress_tracking: Prisma.FieldRef<"subscriptions", 'Boolean'>;
    readonly vip_consultation: Prisma.FieldRef<"subscriptions", 'Boolean'>;
    readonly features: Prisma.FieldRef<"subscriptions", 'Json'>;
    readonly is_active: Prisma.FieldRef<"subscriptions", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"subscriptions", 'DateTime'>;
}
export type subscriptionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
    where: Prisma.subscriptionsWhereUniqueInput;
};
export type subscriptionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
    where: Prisma.subscriptionsWhereUniqueInput;
};
export type subscriptionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
    where?: Prisma.subscriptionsWhereInput;
    orderBy?: Prisma.subscriptionsOrderByWithRelationInput | Prisma.subscriptionsOrderByWithRelationInput[];
    cursor?: Prisma.subscriptionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionsScalarFieldEnum | Prisma.SubscriptionsScalarFieldEnum[];
};
export type subscriptionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
    where?: Prisma.subscriptionsWhereInput;
    orderBy?: Prisma.subscriptionsOrderByWithRelationInput | Prisma.subscriptionsOrderByWithRelationInput[];
    cursor?: Prisma.subscriptionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionsScalarFieldEnum | Prisma.SubscriptionsScalarFieldEnum[];
};
export type subscriptionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
    where?: Prisma.subscriptionsWhereInput;
    orderBy?: Prisma.subscriptionsOrderByWithRelationInput | Prisma.subscriptionsOrderByWithRelationInput[];
    cursor?: Prisma.subscriptionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionsScalarFieldEnum | Prisma.SubscriptionsScalarFieldEnum[];
};
export type subscriptionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscriptionsCreateInput, Prisma.subscriptionsUncheckedCreateInput>;
};
export type subscriptionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.subscriptionsCreateManyInput | Prisma.subscriptionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type subscriptionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    data: Prisma.subscriptionsCreateManyInput | Prisma.subscriptionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type subscriptionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscriptionsUpdateInput, Prisma.subscriptionsUncheckedUpdateInput>;
    where: Prisma.subscriptionsWhereUniqueInput;
};
export type subscriptionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.subscriptionsUpdateManyMutationInput, Prisma.subscriptionsUncheckedUpdateManyInput>;
    where?: Prisma.subscriptionsWhereInput;
    limit?: number;
};
export type subscriptionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscriptionsUpdateManyMutationInput, Prisma.subscriptionsUncheckedUpdateManyInput>;
    where?: Prisma.subscriptionsWhereInput;
    limit?: number;
};
export type subscriptionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
    where: Prisma.subscriptionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.subscriptionsCreateInput, Prisma.subscriptionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.subscriptionsUpdateInput, Prisma.subscriptionsUncheckedUpdateInput>;
};
export type subscriptionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
    where: Prisma.subscriptionsWhereUniqueInput;
};
export type subscriptionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscriptionsWhereInput;
    limit?: number;
};
export type subscriptions$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type subscriptionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
};
export {};
