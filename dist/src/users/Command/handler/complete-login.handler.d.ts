import { ICommandHandler } from "@nestjs/cqrs";
import { UsersService } from "src/users/users.service";
import { User } from "src/users/Schema/user.schema";
import { CompleteLoginCommand } from "../impl/complete-login.command";
export declare class CompleteLoginHandler implements ICommandHandler<CompleteLoginCommand> {
    private readonly usersService;
    constructor(usersService: UsersService);
    execute(command: CompleteLoginCommand): Promise<User>;
}
