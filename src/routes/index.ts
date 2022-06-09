import { Router } from 'express';
import products from './products';
import users from './users';

const router = Router();

router
  .use('/products', products)
  .use('/users', users);

export default router;
