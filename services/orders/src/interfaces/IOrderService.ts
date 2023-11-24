import { Order } from '../domain/Order';

export interface IOrderService {
  createOrder(order: Order): Promise<Order>;
}
