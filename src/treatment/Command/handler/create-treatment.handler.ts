import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateTreatmentCommand } from "../impl/create-treatment.command";
import { plan_status, Treatment } from "src/treatment/Schema/treatment.schema";
import { TreatmentService } from "src/treatment/treatment.service";
import { PaymentsService } from "src/payments/payments.service";
import { BadRequestException } from "@nestjs/common";
import { SubscriptionsService } from "src/subscriptions/subscriptions.service";




@CommandHandler(CreateTreatmentCommand)
export class CreateTreatmentHandler implements ICommandHandler<CreateTreatmentCommand> {
  constructor(
    private readonly treatmentService: TreatmentService,
    private readonly paymentService: PaymentsService,
    private readonly subscriptionService: SubscriptionsService,
  ) { }

  async execute(command: CreateTreatmentCommand): Promise<Treatment> {

    const payment = await this.paymentService.getActivePayment(command.user_id);

    if (!payment) {
      throw new BadRequestException('No active subscription found');
    }

    if (!payment.subscription_id) {
      throw new BadRequestException('Subscription ID is missing');
    }

    const subscription = await this.subscriptionService.FindOne(payment.subscription_id);

    if (!subscription) {
      throw new BadRequestException('Subscription not found');
    }

    const { periodStart, periodEnd } = payment.starts_at
      ? this.paymentService.getCurrentPeriod(payment.starts_at)
      : this.paymentService.getFreePeriod();

    const countThisMonth = await this.treatmentService.countTreatmentsInCurrentPeriod(
      command.user_id,
      periodStart,
      periodEnd,
    );

    if (countThisMonth >= +subscription.treatment_plans && !subscription.vip_consultation) {
      throw new BadRequestException(
        `You have reached the maximum number of treatments this month (${countThisMonth}/${subscription.treatment_plans})`,
      );
    }

    try {
      const newTreatment = new Treatment(
        crypto.randomUUID(),
        command.user_id,
        'title',
        plan_status.active,
        null,
        command.areas_treated,
        0,
        '',
        '',
        '',
        '',
        null,
        new Date(),
        null,
        new Date(),
        new Date(),
        null,

      );

      return await this.treatmentService.createTreatment(newTreatment);

    } catch {
      throw new Error('Failed to create treatment');
    }
  }
}