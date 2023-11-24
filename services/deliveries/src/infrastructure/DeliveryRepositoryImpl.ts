import { PrismaClient } from '@prisma/client';
import { Delivery } from '../domain/Delivery';
import { DeliveryRepository } from '../domain/DeliveryRepository';

const prisma = new PrismaClient();

export class DeliveryRepositoryImpl implements DeliveryRepository {
  async save(delivery: Delivery): Promise<Delivery> {
    return prisma.deliveries.create({ data: delivery });
  }
}
