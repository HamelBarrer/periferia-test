import { Restaurant } from './Restaurant';
import { RestaurantRepository } from './RestaurantRepository';

export class RestaurantUseCase {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  async updateRestaurant(restaurant: Restaurant) {
    return this.restaurantRepository.update(restaurant);
  }

  async createRestaurant(restaurant: Restaurant) {
    return this.restaurantRepository.save(restaurant);
  }
}
