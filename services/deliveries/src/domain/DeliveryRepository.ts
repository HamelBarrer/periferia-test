import { Delivery } from './Delivery';

export interface DeliveryRepository {
  save(delivery: Delivery): Promise<Delivery>;
}
