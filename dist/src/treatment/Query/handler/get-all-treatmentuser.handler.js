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
exports.GetAllTreatmentByUserId = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const get_all_treatmentuser_impl_1 = require("../impl/get-all-treatmentuser.impl");
const treatment_service_1 = require("../../treatment.service");
let GetAllTreatmentByUserId = class GetAllTreatmentByUserId {
    treatmentService;
    constructor(treatmentService) {
        this.treatmentService = treatmentService;
    }
    async execute(query) {
        let userTreatments;
        try {
            userTreatments = await this.treatmentService.findTreatmentsByUserId(query.user_id);
        }
        catch (error) {
            console.error('Error In Get All Treatment For User', error);
            throw new Error("Error In Get All Treatment For User");
        }
        return userTreatments;
    }
};
exports.GetAllTreatmentByUserId = GetAllTreatmentByUserId;
exports.GetAllTreatmentByUserId = GetAllTreatmentByUserId = __decorate([
    (0, cqrs_1.QueryHandler)(get_all_treatmentuser_impl_1.GetAllTreatmentByUserIdQuery),
    __metadata("design:paramtypes", [treatment_service_1.TreatmentService])
], GetAllTreatmentByUserId);
//# sourceMappingURL=get-all-treatmentuser.handler.js.map