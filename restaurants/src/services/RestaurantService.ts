import { Restaurant } from '../domain/Restaurant';
import { RestaurantUseCase } from '../domain/RestaurantUseCase';
import { IRestaurantService } from '../interfaces/IRestaurantService';

export class RestaurantService implements IRestaurantService {
  constructor(private readonly restaurantUseCase: RestaurantUseCase) {}

  async createRestaurant(restaurant: Restaurant): Promise<Restaurant> {
    return this.restaurantUseCase.createRestaurant(restaurant);
  }

  async updateRestaurant(restaurant: Restaurant): Promise<Restaurant> {
    return this.restaurantUseCase.updateRestaurant(restaurant);
  }
}
