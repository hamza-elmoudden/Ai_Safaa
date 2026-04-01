"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindByIdHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const findbyid_query_1 = require("../impl/findbyid.query");
const users_service_1 = require("../../users.service");
let FindByIdHandler = class FindByIdHandler {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async execute(query) {
        try {
            const userId = query.id;
            return await this.userService.findOneId(userId);
        }
        catch (error) {
            console.error(`Error finding user by ID: ${error.message}`);
            throw new Error(`Failed to find user by ID:`);
        }
    }
};
exports.FindByIdHandler = FindByIdHandler;
exports.FindByIdHandler = FindByIdHandler = __decorate([
    (0, cqrs_1.QueryHandler)(findbyid_query_1.FindByIdQuery),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], FindByIdHandler);
//# sourceMappingURL=findbyid.handler.js.map