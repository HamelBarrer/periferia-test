import cors from 'cors';
import express from 'express';
import router from './routes/v1/router';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/notifications', router);

app.listen(process.env.PORT || 3000);
