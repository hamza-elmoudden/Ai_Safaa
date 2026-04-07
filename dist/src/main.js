"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const frontendUrl = configService.get('FRONTEND_URL');
    const localFrontendUrl = configService.get('LOCAL_FRONTEND_URL');
    const expoAppUrl = configService.get('EXPO_APP_URL');
    app.enableCors({
        origin: [frontendUrl, localFrontendUrl, expoAppUrl],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
        allowedHeaders: 'Content-Type, Accept,Authorization',
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }));
    app.getHttpAdapter().getInstance().set('trust proxy', 1);
    app.use((0, cookie_parser_1.default)());
    await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
//# sourceMappingURL=main.js.map