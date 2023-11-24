import cors from 'cors';
import express from 'express';
import restaurantRoutes from './routes/v1/restaurantRouter';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/restaurants', restaurantRoutes);

app.listen(process.env.PORT || 3000);
