import { PrismaClient } from '@prisma/client';
import { Restaurant } from '../domain/Restaurant';
import { RestaurantRepository } from '../domain/RestaurantRepository';

const prisma = new PrismaClient();

export class RestaurantRepositoryImpl implements RestaurantRepository {
  async save(restaurant: Restaurant): Promise<Restaurant> {
    return await prisma.restaurants.create({ data: restaurant });
  }

  async update(restaurant: Restaurant): Promise<Restaurant> {
    return await prisma.restaurants.update({
      data: restaurant,
      where: { restaurantId: restaurant.restaurantId },
    });
  }
}
