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
exports.analyzefacehandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const analyzeface_commend_1 = require("../impl/analyzeface.commend");
const ai_service_1 = require("../../ai.service");
let analyzefacehandler = class analyzefacehandler {
    Aiservice;
    constructor(Aiservice) {
        this.Aiservice = Aiservice;
    }
    async execute(command) {
        try {
            return await this.Aiservice.analyzeFaceFromUrl(command.text, command.image_url);
        }
        catch (error) {
            console.error(`Error Analyze Face Handler : `, error);
            throw new Error("Error analyzing face from URL");
        }
    }
};
exports.analyzefacehandler = analyzefacehandler;
exports.analyzefacehandler = analyzefacehandler = __decorate([
    (0, cqrs_1.CommandHandler)(analyzeface_commend_1.analyzefacecommend),
    __metadata("design:paramtypes", [ai_service_1.AiService])
], analyzefacehandler);
//# sourceMappingURL=analyzeface.handler.js.map