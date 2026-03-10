import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UsersService } from "src/users/users.service";
import { NotFoundException } from "@nestjs/common";
import { User } from "src/users/Schema/user.schema";
import { CompleteLoginCommand } from "../impl/complete-login.command";



@CommandHandler(CompleteLoginCommand)
export class CompleteLoginHandler implements ICommandHandler<CompleteLoginCommand> {
    constructor(
        private readonly usersService: UsersService,
    ) { }

    async execute(command: CompleteLoginCommand): Promise<User> {
        try {
            const { id, full_name, phone, country_code, city, date_of_birth } = command;


            const findUser = await this.usersService.findOneId(id);

            if (!findUser) {
                throw new NotFoundException('User not found');
            }

            const user = new User(id, findUser.email, phone, country_code, city, date_of_birth, findUser.password_hash, findUser.google_provider_id, findUser.google_id, full_name, findUser.role, findUser.is_verified, '', new Date(), new Date(), new Date(), new Date(), findUser.refresh_token, findUser.is_complete_login);

            return await this.usersService.completeUser(user);

        } catch (error) {
            throw new Error('Error completing login: ');
        }
    }
}