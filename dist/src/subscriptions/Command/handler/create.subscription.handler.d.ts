import { ICommandHandler } from "@nestjs/cqrs";
import { CreateSubscriptionCommand } from "../impl/create.command";
export declare class CreateSubscriptionHandler implements ICommandHandler<CreateSubscriptionCommand> {
    execute(command: CreateSubscriptionCommand): Promise<void>;
}
