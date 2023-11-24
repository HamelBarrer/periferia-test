import { Delivery } from '../domain/Delivery';
import { DeliveryUseCase } from '../domain/DeliveryUseCase';
import { IDeliveryService } from '../interfaces/IDeliveryService';

export class DeliveryService implements IDeliveryService {
  constructor(private readonly deliveryUseCase: DeliveryUseCase) {}

  async createDelivery(delivery: Delivery): Promise<Delivery> {
    return this.deliveryUseCase.createDelivery(delivery);
  }
}
