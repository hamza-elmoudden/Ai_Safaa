export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: string[]) => import("@nestjs/common").CustomDecorator<string>;
export declare enum UserRole {
    USER = "user",
    ADMIN = "admin",
    TCHKER = "tchker"
}
export declare const CurrentUser: (...dataOrPipes: unknown[]) => ParameterDecorator;
