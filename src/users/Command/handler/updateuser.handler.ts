import { CommandHandler } from "@nestjs/cqrs";
import { ICommandHandler } from "@nestjs/cqrs";
import { UpdateUserCommand } from "../impl/updateuser.command";
import { UsersService } from "../../users.service";
import { User } from "src/users/Schema/user.schema";
import { NotFoundException } from "@nestjs/common";


@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
  constructor(private readonly usersService: UsersService) { }

  async execute(command: UpdateUserCommand): Promise<any> {
    try {
      const { id,full_name ,phone, country_code, city, date_of_birth  } = command;


      const findUser = await this.usersService.findOneId(id);

      if (!findUser) {
        throw new NotFoundException('User not found');
      }

      const user = new User(id, findUser.email, phone, country_code, city, date_of_birth,findUser.password_hash, findUser.google_provider_id, findUser.google_id, full_name, findUser.role, findUser.is_verified, '', new Date(), new Date(), new Date(), new Date(), findUser.refresh_token);

      const updatedUser = await this.usersService.update(user);

      return updatedUser;
    } catch (error) {
      console.error('Error updating user:', error);
      throw new Error('Error updating user: ');
    }

  }
}

