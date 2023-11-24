import { Payment } from '../domain/Payment';

export interface IPaymentService {
  createPayment(payment: Payment): Promise<Payment>;
}
