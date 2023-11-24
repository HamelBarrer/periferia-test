import { Payment } from '../domain/Payment';

export interface IPaymentService {
  getPayment(orderId: number): Promise<Payment | null>;
  createPayment(payment: Payment): Promise<Payment>;
}
