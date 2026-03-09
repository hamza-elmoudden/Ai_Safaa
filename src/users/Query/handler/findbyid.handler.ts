import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { FindByIdQuery } from "../impl/findbyid.query";
import { UsersService } from "src/users/users.service";



@QueryHandler(FindByIdQuery)
export class FindByIdHandler implements IQueryHandler<FindByIdQuery> {
  constructor(
    private readonly userService: UsersService
  ) { }
  async execute(query: FindByIdQuery) {
    // Logic to find a user by ID
    try {
      const userId = query.id;

      return await this.userService.findOneId(userId);
    } catch (error) {
      console.error(`Error finding user by ID: ${error.message}`);
      throw new Error(`Failed to find user by ID:`);
    }

  }
}