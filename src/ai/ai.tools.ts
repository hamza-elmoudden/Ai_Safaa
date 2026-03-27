import { tool } from "ai"
import { ImageService } from "src/image/image.service"
import { SkinprofilesService } from "src/skinprofiles/skinprofiles.service"
import { TreatmentService } from "src/treatment/treatment.service"
import { z } from "zod"


type SkinProfileResult = {
    error?: string
    profileSkin?: {
        skin_type: string
        concerns: string[]
        allergies: string[]
        notes: string
    }
}


type GetPhotoInitial = {
    url_initial_photo: string | null
}

type AddPhotoInitial = {
    url_initial_photo: string
}

export const CreateTools = (
    treatmentService: TreatmentService,
    profileSkinService: SkinprofilesService,
    imageService: ImageService
) => {
    return {
        getProfileSkin: tool<{ userId: string }, SkinProfileResult>({

            description: "Get Skin Profiles",

            inputSchema: z.object({
                userId: z.string()
            }),

            execute: async ({ userId }) => {

                const profile = await profileSkinService.getProfileByUserId(userId)

                if (!profile) {
                    return { error: "Profile Skin Not Found" }
                }

                return {
                    profileSkin: {
                        skin_type: profile.skin_type,
                        concerns: profile.concerns,
                        allergies: profile.allergies,
                        notes: profile.notes
                    }
                }

            }

        }),

        getPhotoInitial: tool<{ treatmentId: string, userId: string }, GetPhotoInitial>({

            description: "get Initial Photo",
            inputSchema: z.object({

                treatmentId: z.string(),
                userId: z.string()

            }),

            execute: async ({ treatmentId, userId }) => {
                const photo = await treatmentService.getPhotoInitial(userId, treatmentId)

                return {
                    url_initial_photo: photo
                }
            }
        }),


        addPhotoInitial: tool<{ image: any; userId: string; treatmentId: string }, AddPhotoInitial>({
            description: 'upload photo initial',

            inputSchema: z.object({
                image: z.any(),
                userId: z.string(),
                treatmentId: z.string()
            }),

            execute: async ({ image, userId, treatmentId }) => {

                const buffer = Buffer.from(image.base64, 'base64')

                const filename = image.filename || 'photo.jpg'
                const mimetype = image.mimetype || 'image/jpeg'

                const result = await imageService.uploadFile(
                    buffer,
                    filename,
                    mimetype
                )

                await treatmentService.addPhoto(result.url, result.key, treatmentId, userId)

                return {
                    url_initial_photo: result.url
                }
            }
        })

    }
}

export const CreateToolsTwo = (
    profileSkinService: SkinprofilesService,
) => {
    return {
        getProfileSkin: tool<{ userId: string }, SkinProfileResult>({

            description: "Get Skin Profiles",

            inputSchema: z.object({
                userId: z.string()
            }),

            execute: async ({ userId }) => {

                const profile = await profileSkinService.getProfileByUserId(userId)

                if (!profile) {
                    return { error: "Profile Skin Not Found" }
                }

                return {
                    profileSkin: {
                        skin_type: profile.skin_type,
                        concerns: profile.concerns,
                        allergies: profile.allergies,
                        notes: profile.notes
                    }
                }

            }

        }),
    }
}