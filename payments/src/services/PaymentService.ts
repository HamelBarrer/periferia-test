import { Payment } from '../domain/Payment';
import { PaymentUseCase } from '../domain/PaymentUseCase';
import { IPaymentService } from '../interfaces/IPaymentService';

export class PaymentService implements IPaymentService {
  constructor(private readonly paymentUseCase: PaymentUseCase) {}

  async createPayment(payment: Payment): Promise<Payment> {
    return this.paymentUseCase.createPayment(payment);
  }
}
