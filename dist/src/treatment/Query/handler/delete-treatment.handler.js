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
exports.DeleteTreatmentHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const delete_treatment_impl_1 = require("../impl/delete-treatment.impl");
const treatment_service_1 = require("../../treatment.service");
const common_1 = require("@nestjs/common");
let DeleteTreatmentHandler = class DeleteTreatmentHandler {
    treatmentService;
    constructor(treatmentService) {
        this.treatmentService = treatmentService;
    }
    async execute(query) {
        let treatmentuser;
        try {
            treatmentuser = await this.treatmentService.findTreatmentById(query.id, query.user_id);
            if (!treatmentuser) {
                throw new common_1.BadRequestException("No Treatment found");
            }
            await this.treatmentService.deleteTreatment(treatmentuser.id);
        }
        catch (error) {
            console.error('Error In Delete Treatment', error);
            throw new Error("Error In Delete Treatment");
        }
    }
};
exports.DeleteTreatmentHandler = DeleteTreatmentHandler;
exports.DeleteTreatmentHandler = DeleteTreatmentHandler = __decorate([
    (0, cqrs_1.QueryHandler)(delete_treatment_impl_1.DeleteTreatmentQuery),
    __metadata("design:paramtypes", [treatment_service_1.TreatmentService])
], DeleteTreatmentHandler);
//# sourceMappingURL=delete-treatment.handler.js.map