"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateToolsTwo = exports.CreateTools = void 0;
const ai_1 = require("ai");
const zod_1 = require("zod");
const CreateTools = (treatmentService, profileSkinService, imageService, userService) => {
    return {
        getProfileSkin: (0, ai_1.tool)({
            description: "Get Skin Profiles",
            inputSchema: zod_1.z.object({
                userId: zod_1.z.string()
            }),
            execute: async ({ userId }) => {
                const profile = await profileSkinService.getProfileByUserId(userId);
                if (!profile) {
                    return { error: "Profile Skin Not Found" };
                }
                return {
                    profileSkin: {
                        skin_type: profile.skin_type,
                        concerns: profile.concerns,
                        allergies: profile.allergies,
                        notes: profile.notes
                    }
                };
            }
        }),
        getPhotoInitial: (0, ai_1.tool)({
            description: "get Initial Photo",
            inputSchema: zod_1.z.object({
                treatmentId: zod_1.z.string(),
                userId: zod_1.z.string()
            }),
            execute: async ({ treatmentId, userId }) => {
                const photo = await treatmentService.getPhotoInitial(userId, treatmentId);
                return {
                    url_initial_photo: photo
                };
            }
        }),
        addPhotoInitial: (0, ai_1.tool)({
            description: 'upload photo initial',
            inputSchema: zod_1.z.object({
                image: zod_1.z.any(),
                userId: zod_1.z.string(),
                treatmentId: zod_1.z.string()
            }),
            execute: async ({ image, userId, treatmentId }) => {
                const buffer = Buffer.from(image.base64, 'base64');
                const filename = image.filename || 'photo.jpg';
                const mimetype = image.mimetype || 'image/jpeg';
                const result = await imageService.uploadFile(buffer, filename, mimetype);
                await treatmentService.addPhoto(result.url, result.key, treatmentId, userId);
                return {
                    url_initial_photo: result.url
                };
            }
        }),
        getUserCountry: (0, ai_1.tool)({
            description: " Get User Country",
            inputSchema: zod_1.z.object({
                userId: zod_1.z.string()
            }),
            execute: async ({ userId }) => {
                const country = await userService.findCountry(userId);
                if (!country) {
                    return { error: "no country found" };
                }
                return {
                    country: country
                };
            }
        }),
        addPathTreatment: (0, ai_1.tool)({
            description: 'add path treatment',
            inputSchema: zod_1.z.object({
                userId: zod_1.z.string(),
                treatmentId: zod_1.z.string(),
                path: zod_1.z.any()
            }),
            execute: async ({ userId, treatmentId, path }) => {
                const Path = await treatmentService.addPathTreatment(userId, treatmentId, path);
                return { path: Path };
            }
        }),
        getTreatmentPath: (0, ai_1.tool)({
            description: 'get path treatment',
            inputSchema: zod_1.z.object({
                userId: zod_1.z.string(),
                treatmentId: zod_1.z.string()
            }),
            execute: async ({ userId, treatmentId }) => {
                const Path = await treatmentService.getPathTreatment(userId, treatmentId);
                return { path: Path };
            }
        })
    };
};
exports.CreateTools = CreateTools;
const CreateToolsTwo = (profileSkinService, userService) => {
    return {
        getProfileSkin: (0, ai_1.tool)({
            description: "Get Skin Profiles",
            inputSchema: zod_1.z.object({
                userId: zod_1.z.string()
            }),
            execute: async ({ userId }) => {
                const profile = await profileSkinService.getProfileByUserId(userId);
                if (!profile) {
                    return { error: "Profile Skin Not Found" };
                }
                return {
                    profileSkin: {
                        skin_type: profile.skin_type,
                        concerns: profile.concerns,
                        allergies: profile.allergies,
                        notes: profile.notes
                    }
                };
            }
        }),
        getUserCountry: (0, ai_1.tool)({
            description: " Get User Country",
            inputSchema: zod_1.z.object({
                userId: zod_1.z.string()
            }),
            execute: async ({ userId }) => {
                const country = await userService.findCountry(userId);
                if (!country) {
                    return { error: "no country found" };
                }
                return {
                    country: country
                };
            }
        }),
    };
};
exports.CreateToolsTwo = CreateToolsTwo;
//# sourceMappingURL=ai.tools.js.map