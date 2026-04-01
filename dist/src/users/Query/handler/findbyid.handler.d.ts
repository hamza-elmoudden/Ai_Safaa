import { IQueryHandler } from "@nestjs/cqrs";
import { FindByIdQuery } from "../impl/findbyid.query";
import { UsersService } from "src/users/users.service";
import { User } from "src/users/Schema/user.schema";
export declare class FindByIdHandler implements IQueryHandler<FindByIdQuery> {
    private readonly userService;
    constructor(userService: UsersService);
    execute(query: FindByIdQuery): Promise<User | null>;
}
