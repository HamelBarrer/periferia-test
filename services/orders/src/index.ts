import cors from 'cors';
import express from 'express';
import ordersRoutes from './routes/v1/orderRouter';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/orders', ordersRoutes);

app.listen(process.env.PORT || 3000);
