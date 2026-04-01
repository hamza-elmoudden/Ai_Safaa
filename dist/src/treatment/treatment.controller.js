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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreatmentController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const passport_1 = require("@nestjs/passport");
const decorators_1 = require("../auth/decorators/decorators");
const get_all_treatmentuser_impl_1 = require("./Query/impl/get-all-treatmentuser.impl");
const get_treatmentbyid_impl_1 = require("./Query/impl/get-treatmentbyid.impl");
const create_treatment_dto_1 = require("./dto/create-treatment.dto");
const delete_treatment_impl_1 = require("./Query/impl/delete-treatment.impl");
const create_treatment_command_1 = require("./Command/impl/create-treatment.command");
let TreatmentController = class TreatmentController {
    commandBus;
    queryBus;
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async CreateTreatment(data, req) {
        const user = req.user;
        return await this.commandBus.execute(new create_treatment_command_1.CreateTreatmentCommand(user.id, data.areas_treated));
    }
    async GetAllTreatment(req) {
        const user = req.user;
        return this.queryBus.execute(new get_all_treatmentuser_impl_1.GetAllTreatmentByUserIdQuery(user.id));
    }
    async GetMyTreatment(req, id) {
        const user = req.user;
        return this.queryBus.execute(new get_treatmentbyid_impl_1.GetTreatmentByIdQuery(user.id, id));
    }
    async DeleteTreatment(req, id) {
        const user = req.user;
        return this.queryBus.execute(new delete_treatment_impl_1.DeleteTreatmentQuery(id, user.id));
    }
};
exports.TreatmentController = TreatmentController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, decorators_1.Roles)('user'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_treatment_dto_1.CreateTreatmentDto, Object]),
    __metadata("design:returntype", Promise)
], TreatmentController.prototype, "CreateTreatment", null);
__decorate([
    (0, common_1.Get)('all'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, decorators_1.Roles)('user'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TreatmentController.prototype, "GetAllTreatment", null);
__decorate([
    (0, common_1.Get)('my/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, decorators_1.Roles)('user'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TreatmentController.prototype, "GetMyTreatment", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, decorators_1.Roles)('user'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TreatmentController.prototype, "DeleteTreatment", null);
exports.TreatmentController = TreatmentController = __decorate([
    (0, common_1.Controller)('treatment'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], TreatmentController);
//# sourceMappingURL=treatment.controller.js.map