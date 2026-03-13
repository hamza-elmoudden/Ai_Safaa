import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateTreatmentCommand } from "../impl/create-treatment.command";
import { Treatment } from "src/treatment/Schema/treatment.schema";
import { User } from "src/users/Schema/user.schema";
import { Payment } from "src/payments/Schema/payments.schema";
import { TreatmentService } from "src/treatment/treatment.service";
import { UsersService } from "src/users/users.service";
import { PaymentsService } from "src/payments/payments.service";
import { BadRequestException } from "@nestjs/common";
import { Subscription } from "src/subscriptions/Schema/subscriptions.schema";
import { SubscriptionsService } from "src/subscriptions/subscriptions.service";




@CommandHandler(CreateTreatmentCommand)
export class CreateTreatmentHandler implements ICommandHandler<CreateTreatmentCommand> {
    constructor(
        private readonly treatmentService: TreatmentService,
        private readonly userService: UsersService,
        private readonly paymentService: PaymentsService,
        private readonly subscriptionService: SubscriptionsService,
    ) { }
    async execute(command: CreateTreatmentCommand): Promise<Treatment> {
        let treatment: Treatment[];
        let user: User;
        let payments: Payment[];
        let subscription: Subscription;

        try {
            treatment = await this.treatmentService.findTreatmentsByUserId(command.user_id);
        } catch (error) {
            console.error(`Error fetching treatments for user ${command.user_id}:`, error);
            throw new Error(`Failed to fetch treatments for user ${command.user_id}}`);
        }

        try {
            payments = await this.paymentService.findPaymentsByUserId(command.user_id);
        } catch (error) {
            console.error(`Error fetching payments for user ${command.user_id}:`, error);
            throw new Error(`Failed to fetch payments for user ${command.user_id}}`);
        }

        if (payments.length === 0) {
            throw new BadRequestException('No payments found for this user');
        }

        if (payments[0].expires_at && payments[0].expires_at < new Date()) {
            throw new BadRequestException('Your subscription has expired, please renew it to access the treatment');
        }

        try {
            const subscriptionId = payments[0].subscription_id;

            if (!subscriptionId) {
                throw new BadRequestException('Subscription ID is missing for this payment');
            }

            const foundSubscription = await this.subscriptionService.FindOne(subscriptionId);

            if (!foundSubscription) {
                throw new BadRequestException('Subscription not found for this payment');
            }

            subscription = foundSubscription;

        } catch (error) {
            throw new Error(`Failed to fetch subscription for user ${command.user_id}`);
        }

        if (
            typeof subscription.treatment_plans === "number" &&
            treatment.length >= subscription.treatment_plans && subscription.vip_consultation === false
        ) {
            throw new BadRequestException('You have reached the maximum number of treatments allowed by your subscription plan');
        }


        try {
            const MapTreatment = new Treatment(
                crypto.randomUUID(),
                command.user_id,
                command.title,
                command.concern_type,
                0,
                0,
                null,
                command.status,
                null,
                command.areas_treated,
                "",
                "",
                null,
                null,
                null,
                new Date(),
                null,
                new Date(),
                new Date(), 
            );

            const createTreatment = await this.treatmentService.createTreatment(MapTreatment);

            return createTreatment;
        }catch{
            throw new Error(`Failed to create treatment for user`);
        }
            
        
    }
}
