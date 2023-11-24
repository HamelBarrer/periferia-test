import { Router } from 'express';
import { PaymentController } from '../../controllers/DeliveryController';
import { PaymentUseCase } from '../../domain/PaymentUseCase';
import { PaymentRepositoryImpl } from '../../infrastructure/PaymentRepositoryImpl';
import { PaymentService } from '../../services/PaymentService';

const router = Router();

const paymentRepository = new PaymentRepositoryImpl();
const paymentUseCase = new PaymentUseCase(paymentRepository);
const paymentService = new PaymentService(paymentUseCase);
const paymentController = new PaymentController(paymentService);

router.post('/', (req, res) => {
  paymentController.createPayment(req, res);
});

export default router;
