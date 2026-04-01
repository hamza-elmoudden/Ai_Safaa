import { ICommandHandler } from "@nestjs/cqrs";
import { UpdateUserCommand } from "../impl/updateuser.command";
import { UsersService } from "../../users.service";
export declare class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
    private readonly usersService;
    constructor(usersService: UsersService);
    execute(command: UpdateUserCommand): Promise<any>;
}
