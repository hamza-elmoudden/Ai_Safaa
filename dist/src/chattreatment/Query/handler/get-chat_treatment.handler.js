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
exports.GetChatTreatmentHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const get_chat_treatment_query_1 = require("../impl/get-chat_treatment.query");
const chattreatment_service_1 = require("../../chattreatment.service");
const treatment_service_1 = require("../../../treatment/treatment.service");
let GetChatTreatmentHandler = class GetChatTreatmentHandler {
    chatTreatmentService;
    treatmentService;
    constructor(chatTreatmentService, treatmentService) {
        this.chatTreatmentService = chatTreatmentService;
        this.treatmentService = treatmentService;
    }
    async execute(query) {
        let treatment;
        treatment = await this.treatmentService.findTreatmentByIdAndUserId(query.user_id, query.plan_id);
        if (!treatment) {
            throw new common_1.BadGatewayException("You dent have In Treatment chat");
        }
        const chats = await this.chatTreatmentService.getChat(treatment.id, query.limit, query.page);
        return chats;
    }
};
exports.GetChatTreatmentHandler = GetChatTreatmentHandler;
exports.GetChatTreatmentHandler = GetChatTreatmentHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_chat_treatment_query_1.GetChatTreatmentQuery),
    __metadata("design:paramtypes", [chattreatment_service_1.ChattreatmentService,
        treatment_service_1.TreatmentService])
], GetChatTreatmentHandler);
//# sourceMappingURL=get-chat_treatment.handler.js.map