import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Payment } from './Schema/payments.schema';

@Injectable()
export class PaymentsService {
    constructor(
        private  readonly prisma:PrismaService
    ) {}



    async createPayment(data:Payment){
        const payment = await this.prisma.payments.create({
            data:{
               id:data.id,
               user_id:data.user_id,
               amount_mad:data.amount_mad,
               method:data.method,
               status:data.status,
               provider_ref:data.provider_ref,
               provider_meta:data.provider_meta,
               subscription_id:data.subscription_id,
               paid_at:data.paid_at
            }
        })
        return payment;
    }

    async findPaymentById(id:string){
        const payment = await this.prisma.payments.findUnique({
            where:{
                id:id
            }
        })
        return payment;
    }


    async findPaymentsByUserId(user_id:string){
        const payments = await this.prisma.payments.findMany({
            where:{
                user_id:user_id
            }
        })
        return payments;
    }

     async deletePayment(id:string){
        await this.prisma.payments.delete({
            where:{
                id:id
            }
        })
    }
}
