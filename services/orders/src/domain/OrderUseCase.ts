import { Order } from './Order';
import { OrderRepository } from './OrderRepository';

export class OrderUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async createOrder(order: Order) {
    return this.orderRepository.save(order);
  }
}
