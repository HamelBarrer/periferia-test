import { PrismaClient } from '@prisma/client';
import { Order } from '../domain/Order';
import { OrderRepository } from '../domain/OrderRepository';

const prisma = new PrismaClient();

export class OrderRepositoryImpl implements OrderRepository {
  async save(order: Order): Promise<Order> {
    return prisma.orders.create({ data: order });
  }
}
