import cors from 'cors';
import express from 'express';
import orderRoutes from './routes/v1/restaurantRouter';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/restaurants', orderRoutes);

app.listen(3000);
