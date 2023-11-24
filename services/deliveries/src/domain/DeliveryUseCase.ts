import { Delivery } from './Delivery';
import { DeliveryRepository } from './DeliveryRepository';

export class DeliveryUseCase {
  constructor(private readonly deliveryRepository: DeliveryRepository) {}

  async createDelivery(delivery: Delivery) {
    return this.deliveryRepository.save(delivery);
  }
}
