import { Router } from 'express';
import { receiveEventRabbit } from '../../../rabbit';

const router = Router();

router.get('/', async (req, res) => {
  const data = await receiveEventRabbit();

  res.status(200).json(data);
});

export default router;
