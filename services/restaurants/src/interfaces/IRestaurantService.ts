import { Restaurant } from '../domain/Restaurant';

export interface IRestaurantService {
  createRestaurant(restaurant: Restaurant): Promise<Restaurant>;
  updateRestaurant(restaurant: Restaurant): Promise<Restaurant>;
}
