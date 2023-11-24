import { Router } from 'express';
import { RestaurantController } from '../../controllers/OrderController';
import { RestaurantUseCase } from '../../domain/RestaurantUseCase';
import { RestaurantRepositoryImpl } from '../../infrastructure/RestaurantRepositoryImpl';
import { RestaurantService } from '../../services/RestaurantService';

const router = Router();

const restaurantRepository = new RestaurantRepositoryImpl();
const restaurantUseCase = new RestaurantUseCase(restaurantRepository);
const restaurantService = new RestaurantService(restaurantUseCase);
const restaurantController = new RestaurantController(restaurantService);

router.post('/', (req, res) => {
  restaurantController.createRestaurant(req, res);
});

router.put('/:restaurantId', (req, res) => {
  restaurantController.updateRestaurant(req, res);
});

export default router;
