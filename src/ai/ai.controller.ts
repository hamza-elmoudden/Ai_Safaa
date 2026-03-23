import { BadRequestException, Body, Controller, Get, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { generatetextcommand } from './Command/impl/generatechat.command';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadImageCommand } from 'src/image/commands/impl/upload-image.command';
import { AiDto } from './dto/ai.dto';
import { Res } from '@nestjs/common';
import type { Response } from 'express';


@Controller('ai')
export class AiController {

    constructor(
        private readonly commandbus: CommandBus
    ) { }


    @Post('chat')
    @UseInterceptors(FileInterceptor('image'))
    async generatetext(
        @Body() prompt: AiDto,
        @UploadedFile() file: Express.Multer.File,
        @Res() res: Response,
        @Query('userId') userId: string
    ) {
        try {

            if (file) {

                try {
                    const maxSize = 5 * 1024 * 1024;
                    if (file.size > maxSize) throw new BadRequestException('Image too large');


                    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

                    if (!allowedMimeTypes.includes(file.mimetype))
                        throw new BadRequestException('Only image files allowed');

                    const url = await this.commandbus.execute(
                        new UploadImageCommand(file.originalname, file.buffer, file.mimetype)
                    );

                    prompt.image = typeof url.url === 'string' ? url.url : undefined;
                } catch (error) {

                    console.error('Error Upload Image ', error)

                    res.status(401).send('Error On Upload Image')
                }

            }

            const stream = await this.commandbus.execute(
                new generatetextcommand(prompt.text, userId, prompt.image)
            );

            res.status(200);
            res.setHeader('Content-Type', 'text/event-stream');
            res.setHeader('Cache-Control', 'no-cache');
            res.setHeader('Connection', 'keep-alive');

            for await (const chunk of stream) {

                if (chunk.type === 'text-delta' && chunk.delta) {

                    res.write(chunk.delta);
                }

            }

            res.end()

        } catch (error) {
            console.error('Stream error:', error);
            if (!res.headersSent) {
                res.status(500).json({
                    success: false,
                    error: 'An error occurred in processing the request',
                    message: process.env.NODE_ENV === 'development' ? error.message : undefined
                });
            } else {
                res.end();
            }
        }
    }




}
