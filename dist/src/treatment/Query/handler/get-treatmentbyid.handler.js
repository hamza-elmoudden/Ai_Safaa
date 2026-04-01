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
exports.GetTreatmentByIdHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const get_treatmentbyid_impl_1 = require("../impl/get-treatmentbyid.impl");
const treatment_service_1 = require("../../treatment.service");
let GetTreatmentByIdHandler = class GetTreatmentByIdHandler {
    treatmentService;
    constructor(treatmentService) {
        this.treatmentService = treatmentService;
    }
    async execute(query) {
        let userTreatment;
        try {
            userTreatment = await this.treatmentService.findTreatmentById(query.id, query.user_id);
        }
        catch (error) {
            console.error('Error In Get Treatment by id', error);
            throw new Error('Error In Get Treatment');
        }
        return userTreatment;
    }
};
exports.GetTreatmentByIdHandler = GetTreatmentByIdHandler;
exports.GetTreatmentByIdHandler = GetTreatmentByIdHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_treatmentbyid_impl_1.GetTreatmentByIdQuery),
    __metadata("design:paramtypes", [treatment_service_1.TreatmentService])
], GetTreatmentByIdHandler);
//# sourceMappingURL=get-treatmentbyid.handler.js.map