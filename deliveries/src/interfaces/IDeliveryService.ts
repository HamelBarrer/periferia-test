import { Delivery } from '../domain/Delivery';

export interface IDeliveryService {
  createDelivery(delivery: Delivery): Promise<Delivery>;
}
