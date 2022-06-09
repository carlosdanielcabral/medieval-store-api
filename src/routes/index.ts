import { Router } from 'express';
import products from './products';
import users from './users';
import orders from './orders';

const router = Router();

router
  .use('/products', products)
  .use('/users', users)
  .use('/orders', orders);

export default router;
