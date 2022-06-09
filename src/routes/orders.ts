import { Router } from 'express';
import * as Order from '../controllers/order';

const router = Router();

router
  .get('/', Order.getAll);

export default router;
