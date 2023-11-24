import cors from 'cors';
import express from 'express';
import paymentRoutes from './routes/v1/paymentRouter';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/payments', paymentRoutes);

app.listen(3000);
