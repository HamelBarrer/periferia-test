import { Request, Response } from 'express';
import { Restaurant } from '../domain/Restaurant';
import { RestaurantService } from '../services/RestaurantService';

export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  async createRestaurant(req: Request, res: Response) {
    try {
      const createdRestaurant = await this.restaurantService.createRestaurant(
        req.body,
      );
      res.status(200).json(createdRestaurant);
    } catch (error) {
      console.log({ error });
      res.status(500).json({ error: error });
    }
  }

  async updateRestaurant(req: Request, res: Response) {
    try {
      const restaurantId = req.params.restaurantId;
      const restaurant = req.body as Restaurant;
      restaurant.restaurantId = Number(restaurantId);

      const updatedRestaurant = await this.restaurantService.updateRestaurant(
        restaurant,
      );
      res.status(200).json(updatedRestaurant);
    } catch (error) {
      console.log({ error });
      res.status(500).json({ error: error });
    }
  }
}
