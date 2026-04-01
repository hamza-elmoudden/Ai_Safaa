import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    updateUser(updateUserDto: UpdateUserDto, req: any): Promise<{
        message: string;
        data: {
            name: any;
            phone: any;
            country_code: any;
            city: any;
            date_of_birth: any;
        };
    }>;
    completeProfile(updateUserDto: UpdateUserDto, req: any): Promise<{
        message: string;
        data: {
            name: any;
            phone: any;
            country_code: any;
            city: any;
            date_of_birth: any;
        };
    }>;
    me(req: any): Promise<{
        message: string;
        data: {
            full_name: any;
            phone: any;
            email: any;
            country_code: any;
            city: any;
            date_of_birth: any;
        };
    }>;
}
