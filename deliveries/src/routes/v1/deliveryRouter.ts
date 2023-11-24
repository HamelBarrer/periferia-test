import { Router } from 'express';
import { DeliveryController } from '../../controllers/DeliveryController';
import { DeliveryUseCase } from '../../domain/DeliveryUseCase';
import { DeliveryRepositoryImpl } from '../../infrastructure/DeliveryRepositoryImpl';
import { DeliveryService } from '../../services/DeliveryService';

const router = Router();

const deliveryRepository = new DeliveryRepositoryImpl();
const deliveryUseCase = new DeliveryUseCase(deliveryRepository);
const deliveryService = new DeliveryService(deliveryUseCase);
const deliveryController = new DeliveryController(deliveryService);

router.post('/', (req, res) => {
  deliveryController.createDelivery(req, res);
});

export default router;
