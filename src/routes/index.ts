import { Router } from 'express';
import products from './products';
import users from './users';
import orders from './orders';
import login from './login';

const router = Router();

router
  .use('/products', products)
  .use('/users', users)
  .use('/orders', orders)
  .use('/login', login);

export default router;
