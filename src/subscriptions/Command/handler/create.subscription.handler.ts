import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateSubscriptionCommand } from "../impl/create.command";




@CommandHandler(CreateSubscriptionCommand)
export class CreateSubscriptionHandler implements ICommandHandler<CreateSubscriptionCommand> {
    async execute(command: CreateSubscriptionCommand): Promise<void> {
    }
}