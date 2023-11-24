import { Request, Response } from 'express';
import { PaymentService } from '../services/PaymentService';

export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  async createPayment(req: Request, res: Response) {
    try {
      const createdPayment = await this.paymentService.createPayment(req.body);
      res.status(201).json(createdPayment);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}
