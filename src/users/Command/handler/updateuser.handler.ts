import { CommandHandler } from "@nestjs/cqrs";
import { ICommandHandler } from "@nestjs/cqrs";
import { UpdateUserCommand } from "../impl/updateuser.command";
import { UsersService } from "../../users.service";
import { User } from "src/users/Schema/user.schema";
import { NotFoundException } from "@nestjs/common";


@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
  constructor(private readonly usersService: UsersService) {}

  async execute(command: UpdateUserCommand): Promise<any> {
    const { id, phone, country_code, city, date_of_birth, password_hash, google_provider_id, google_id, full_name, role, is_verified } = command;
    // Implement the logic to update the user using the usersService
    // For example:
    const findUser = await this.usersService.findOneId(id);

    if (!findUser) {
        throw new NotFoundException('User not found');
    }

    const user = new User(id, findUser.email, phone, country_code, city, date_of_birth, password_hash, google_provider_id, google_id, full_name, role, is_verified, '',new Date(), new Date(), new Date(), new Date() );
    
    const updatedUser = await this.usersService.update(user);

    return updatedUser;
  }
}     

