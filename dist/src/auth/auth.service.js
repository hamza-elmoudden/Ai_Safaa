"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const crypto = __importStar(require("crypto"));
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    jwtService;
    usersService;
    config;
    constructor(jwtService, usersService, config) {
        this.jwtService = jwtService;
        this.usersService = usersService;
        this.config = config;
    }
    async googleLogin(user) {
        await this.usersService.updateLastLogin(user.id);
        return this.generateTokens(user);
    }
    async rotateTokens(user) {
        await this.usersService.clearRefreshToken(user.id);
        return this.generateTokens(user);
    }
    async logout(userId) {
        await this.usersService.clearRefreshToken(userId);
    }
    async generateTokens(user) {
        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
        };
        const expiresIn = 60 * 15;
        const accessToken = this.jwtService.sign(payload, {
            secret: this.config.getOrThrow('JWT_SECRET'),
            expiresIn,
        });
        const refreshToken = this.jwtService.sign({ sub: user.id }, {
            secret: this.config.getOrThrow('JWT_REFRESH_SECRET'),
            expiresIn: this.config.getOrThrow('JWT_REFRESH_EXPIRES_IN'),
        });
        const hashed = crypto
            .createHash('sha256')
            .update(refreshToken)
            .digest('hex');
        await this.usersService.saveRefreshToken(user.id, hashed);
        return { accessToken, refreshToken, expiresIn };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        users_service_1.UsersService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map