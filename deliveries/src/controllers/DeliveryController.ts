import { Request, Response } from 'express';
import { sendEventRabbit } from '../rabbit';
import { DeliveryService } from '../services/DeliveryService';

export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  async createDelivery(req: Request, res: Response) {
    try {
      const createdDelivery = await this.deliveryService.createDelivery(
        req.body,
      );
      await sendEventRabbit(createdDelivery);

      res.status(201).json(createdDelivery);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}
