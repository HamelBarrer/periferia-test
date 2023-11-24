import { Request, Response } from 'express';
import { sendEvent } from '../rabbit';
import { PaymentService } from '../services/PaymentService';

export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  async createPayment(req: Request, res: Response) {
    try {
      const { value, orderId } = req.body;

      const orderPayment = await this.paymentService.getPayment(orderId);
      if (!orderPayment) {
        res.status(404).json({ message: 'Order not found' });
      }
      if (orderPayment?.value !== value) {
        res.status(400).json({ message: 'Value not equals' });
      }

      const createdPayment = await this.paymentService.createPayment(req.body);
      await sendEvent(createdPayment);

      res.status(201).json(createdPayment);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}
