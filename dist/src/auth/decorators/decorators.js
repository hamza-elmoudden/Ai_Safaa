"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = exports.UserRole = exports.Roles = exports.ROLES_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.ROLES_KEY = 'roles';
const Roles = (...roles) => (0, common_1.SetMetadata)(exports.ROLES_KEY, roles);
exports.Roles = Roles;
var UserRole;
(function (UserRole) {
    UserRole["USER"] = "user";
    UserRole["ADMIN"] = "admin";
    UserRole["TCHKER"] = "tchker";
})(UserRole || (exports.UserRole = UserRole = {}));
exports.CurrentUser = (0, common_1.createParamDecorator)((_, ctx) => ctx.switchToHttp().getRequest().user);
//# sourceMappingURL=decorators.js.map