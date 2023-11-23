import { Request, Response } from 'express';
import { OrderService } from '../services/OrderService';

export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  async createOrder(req: Request, res: Response) {
    try {
      const createdOrder = await this.orderService.createOrder(req.body);
      res.status(201).json(createdOrder);
    } catch (error) {
      console.log({ error });
      res.status(500).json({ error: error });
    }
  }
}
