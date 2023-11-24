import { Request, Response } from 'express';
import { DeliveryService } from '../services/DeliveryService';

export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  async createDelivery(req: Request, res: Response) {
    try {
      const createdDelivery = await this.deliveryService.createDelivery(
        req.body,
      );
      res.status(201).json(createdDelivery);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}
