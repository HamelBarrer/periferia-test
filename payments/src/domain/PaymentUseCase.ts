import { Payment } from './Payment';
import { PaymentRepository } from './PaymentRepository';

export class PaymentUseCase {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  async getPayment(orderId: number) {
    return this.paymentRepository.get(orderId);
  }

  async createPayment(payment: Payment) {
    return this.paymentRepository.save(payment);
  }
}
