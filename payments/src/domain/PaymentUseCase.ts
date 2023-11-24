import { Payment } from './Payment';
import { PaymentRepository } from './PaymentRepository';

export class PaymentUseCase {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  async createPayment(payment: Payment) {
    return this.paymentRepository.save(payment);
  }
}
