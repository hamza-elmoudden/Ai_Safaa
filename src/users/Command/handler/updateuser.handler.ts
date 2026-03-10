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
    const { id, full_name, phone, country_code, city, date_of_birth } = command;


    let findUser: User

    try {
      findUser = await this.usersService.findOneId(id);
    } catch (error) {
      throw new Error('Error finding user: ' + error.message);
    }


    if (!findUser) {
      throw new NotFoundException('User not found');
    }

    const user = new User(id, findUser.email, phone, country_code, city, date_of_birth, findUser.password_hash, findUser.google_provider, findUser.google_id, full_name, findUser.role, findUser.is_verified, '', new Date(), new Date(), new Date(), new Date(), findUser.refresh_token, findUser.is_complete_login);

    if (user.is_complete_login) {

      throw new NotFoundException('User Not completed login');

    }

    const updatedUser = await this.usersService.update(user);

    return updatedUser;


  }
}

