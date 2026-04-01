import { ICommandHandler } from "@nestjs/cqrs";
import { CreateTreatmentCommand } from "../impl/create-treatment.command";
import { Treatment } from "src/treatment/Schema/treatment.schema";
import { TreatmentService } from "src/treatment/treatment.service";
import { PaymentsService } from "src/payments/payments.service";
import { SubscriptionsService } from "src/subscriptions/subscriptions.service";
export declare class CreateTreatmentHandler implements ICommandHandler<CreateTreatmentCommand> {
    private readonly treatmentService;
    private readonly paymentService;
    private readonly subscriptionService;
    constructor(treatmentService: TreatmentService, paymentService: PaymentsService, subscriptionService: SubscriptionsService);
    execute(command: CreateTreatmentCommand): Promise<Treatment>;
}
