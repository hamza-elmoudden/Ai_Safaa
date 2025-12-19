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
exports.generatetexthandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const generatechat_command_1 = require("../impl/generatechat.command");
const ai_service_1 = require("../../ai.service");
const cqrs_2 = require("@nestjs/cqrs");
const analyzeface_commend_1 = require("../impl/analyzeface.commend");
let generatetexthandler = class generatetexthandler {
    Aiservice;
    commandbus;
    constructor(Aiservice, commandbus) {
        this.Aiservice = Aiservice;
        this.commandbus = commandbus;
    }
    async execute(command) {
        try {
            let text_ai;
            if (command?.image_url) {
                text_ai = await this.commandbus.execute(new analyzeface_commend_1.analyzefacecommend(command.image_url, command.text));
            }
            return this.Aiservice.generatetext(command.text, text_ai, command.user_id);
        }
        catch (error) {
            console.error(` Error Generate Text Handler `, error);
            throw new Error("Method not implemented.");
        }
    }
};
exports.generatetexthandler = generatetexthandler;
exports.generatetexthandler = generatetexthandler = __decorate([
    (0, cqrs_1.CommandHandler)(generatechat_command_1.generatetextcommand),
    __metadata("design:paramtypes", [ai_service_1.AiService,
        cqrs_2.CommandBus])
], generatetexthandler);
//# sourceMappingURL=generatechat.handler.js.map