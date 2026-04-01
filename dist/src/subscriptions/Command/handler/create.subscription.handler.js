"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubscriptionHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const create_command_1 = require("../impl/create.command");
let CreateSubscriptionHandler = class CreateSubscriptionHandler {
    async execute(command) {
    }
};
exports.CreateSubscriptionHandler = CreateSubscriptionHandler;
exports.CreateSubscriptionHandler = CreateSubscriptionHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_command_1.CreateSubscriptionCommand)
], CreateSubscriptionHandler);
//# sourceMappingURL=create.subscription.handler.js.map