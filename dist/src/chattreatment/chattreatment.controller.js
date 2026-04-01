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
exports.ChattreatmentController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const get_chat_treatment_query_1 = require("./Query/impl/get-chat_treatment.query");
const passport_1 = require("@nestjs/passport");
const decorators_1 = require("../auth/decorators/decorators");
let ChattreatmentController = class ChattreatmentController {
    queryBus;
    constructor(queryBus) {
        this.queryBus = queryBus;
    }
    async GetChat(req, limit, page, id) {
        const user = req.user;
        const chats = await this.queryBus.execute(new get_chat_treatment_query_1.GetChatTreatmentQuery(user.id, id, page, limit));
        return chats;
    }
};
exports.ChattreatmentController = ChattreatmentController;
__decorate([
    (0, common_1.Get)(":id"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, decorators_1.Roles)('user'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number, String]),
    __metadata("design:returntype", Promise)
], ChattreatmentController.prototype, "GetChat", null);
exports.ChattreatmentController = ChattreatmentController = __decorate([
    (0, common_1.Controller)('chattreatment'),
    __metadata("design:paramtypes", [cqrs_1.QueryBus])
], ChattreatmentController);
//# sourceMappingURL=chattreatment.controller.js.map