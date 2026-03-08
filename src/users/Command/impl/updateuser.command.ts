import { Role } from "src/users/Schema/user.schema";

export class UpdateUserCommand {
  constructor(
        public email: string,
        public phone:string,
        public country_code: string,
        public city: string,
        public date_of_birth: Date,
        public password_hash: string,
        public google_provider_id: boolean,
        public google_id:string,
        public full_name: string,
        public role: Role,
        public is_verified: boolean,
  ) {}
}