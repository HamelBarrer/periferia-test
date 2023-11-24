import cors from 'cors';
import express from 'express';
import deliveryRoutes from './routes/v1/deliveryRouter';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/deliveries', deliveryRoutes);

app.listen(process.env.PORT || 3000);
