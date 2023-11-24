import { Router } from 'express';
import { OrderController } from '../../controllers/OrderController';
import { OrderUseCase } from '../../domain/OrderUseCase';
import { OrderRepositoryImpl } from '../../infrastructure/OrderRepositoryImpl';
import { OrderService } from '../../services/OrderService';

const router = Router();

const orderRepository = new OrderRepositoryImpl();
const orderUseCase = new OrderUseCase(orderRepository);
const orderService = new OrderService(orderUseCase);
const orderController = new OrderController(orderService);

router.post('/', (req, res) => {
  orderController.createOrder(req, res);
});

export default router;
