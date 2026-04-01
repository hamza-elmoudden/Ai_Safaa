"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreatmentModule = void 0;
const common_1 = require("@nestjs/common");
const treatment_service_1 = require("./treatment.service");
const treatment_controller_1 = require("./treatment.controller");
const subscriptions_module_1 = require("../subscriptions/subscriptions.module");
const payments_module_1 = require("../payments/payments.module");
const users_module_1 = require("../users/users.module");
const prisma_module_1 = require("../prisma/prisma.module");
const create_treatment_handler_1 = require("./Command/handler/create-treatment.handler");
const delete_treatment_handler_1 = require("./Query/handler/delete-treatment.handler");
const get_all_treatmentuser_handler_1 = require("./Query/handler/get-all-treatmentuser.handler");
const get_treatmentbyid_handler_1 = require("./Query/handler/get-treatmentbyid.handler");
let TreatmentModule = class TreatmentModule {
};
exports.TreatmentModule = TreatmentModule;
exports.TreatmentModule = TreatmentModule = __decorate([
    (0, common_1.Module)({
        providers: [
            treatment_service_1.TreatmentService,
            create_treatment_handler_1.CreateTreatmentHandler,
            delete_treatment_handler_1.DeleteTreatmentHandler,
            get_all_treatmentuser_handler_1.GetAllTreatmentByUserId,
            get_treatmentbyid_handler_1.GetTreatmentByIdHandler
        ],
        controllers: [treatment_controller_1.TreatmentController],
        imports: [
            subscriptions_module_1.SubscriptionsModule,
            payments_module_1.PaymentsModule,
            users_module_1.UsersModule,
            prisma_module_1.PrismaModule
        ],
        exports: [treatment_service_1.TreatmentService]
    })
], TreatmentModule);
//# sourceMappingURL=treatment.module.js.map