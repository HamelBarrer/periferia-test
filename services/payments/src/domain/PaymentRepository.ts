import { Payment } from './Payment';

export interface PaymentRepository {
  get(orderId: number): Promise<Payment | null>;
  save(payment: Payment): Promise<Payment>;
}
