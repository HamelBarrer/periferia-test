import { PrismaClient } from '@prisma/client';
import { Payment } from '../domain/Payment';
import { PaymentRepository } from '../domain/PaymentRepository';

const prisma = new PrismaClient();

export class PaymentRepositoryImpl implements PaymentRepository {
  async save(payment: Payment): Promise<Payment> {
    return prisma.payments.create({ data: payment });
  }
}
