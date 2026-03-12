import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubscriptionsService {
    constructor(
        private readonly prisma: PrismaService,
    ) {}

    async FindAll() {
        return await this.prisma.subscriptions.findMany();
    }

    async FindOne(id: string) {
        return await this.prisma.subscriptions.findUnique({
            where: { id },
        });
    }

    
}
