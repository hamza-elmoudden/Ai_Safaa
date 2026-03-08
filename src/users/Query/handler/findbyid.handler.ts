import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { FindByIdQuery } from "../impl/findbyid.query";
import { UsersService } from "src/users/users.service";



@QueryHandler(FindByIdQuery)
export class FindByIdHandler implements IQueryHandler<FindByIdQuery> {
    constructor(
        private readonly userService: UsersService
    ) {}
  async execute(query: FindByIdQuery) {
    // Logic to find a user by ID
    const userId = query.id;

    return await this.userService.findOneId(userId);
    
  }
}