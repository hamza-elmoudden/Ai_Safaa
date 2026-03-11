import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UsersService } from "src/users/users.service";
import { NotFoundException } from "@nestjs/common";
import { User } from "src/users/Schema/user.schema";
import { CompleteLoginCommand } from "../impl/complete-login.command";
import { console } from "inspector";



@CommandHandler(CompleteLoginCommand)
export class CompleteLoginHandler implements ICommandHandler<CompleteLoginCommand> {
    constructor(
        private readonly usersService: UsersService,
    ) { }

    async execute(command: CompleteLoginCommand): Promise<User> {

        const { id, full_name, phone, country_code, city, date_of_birth } = command;
        let findUser: User;

        try {
            findUser = await this.usersService.findOneId(id);

        } catch (error) {
            console.error('Error finding user:', error);
            throw new Error('Error finding user: ');
        }

        if (!findUser) {
            throw new NotFoundException('User not found');
        }


        const user = new User(id, findUser.email, phone, country_code, city, date_of_birth, findUser.password_hash, findUser.google_provider, findUser.google_id, full_name, findUser.role, findUser.is_verified, '', new Date(), new Date(), new Date(), new Date(), findUser.refresh_token, findUser.is_complete_login);

        if (!user.is_complete_login) {
            throw new NotFoundException('User already completed login');
        }

        try {
            return await this.usersService.completeUser(user);
        } catch (error) {
            console.error('Error completing user login:', error);
            throw new Error('Error completing user login: ' + error.message);
        }


    }
}