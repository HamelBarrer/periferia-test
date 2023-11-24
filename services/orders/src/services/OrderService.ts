import { Order } from '../domain/Order';
import { OrderUseCase } from '../domain/OrderUseCase';
import { IOrderService } from '../interfaces/IOrderService';

export class OrderService implements IOrderService {
  constructor(private readonly orderUseCase: OrderUseCase) {}

  async createOrder(order: Order): Promise<Order> {
    return this.orderUseCase.createOrder(order);
  }
}
