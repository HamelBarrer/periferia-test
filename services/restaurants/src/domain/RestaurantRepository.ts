import { Restaurant } from './Restaurant';

export interface RestaurantRepository {
  save(restaurant: Restaurant): Promise<Restaurant>;
  update(restaurant: Restaurant): Promise<Restaurant>;
}
