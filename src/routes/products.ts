import { Router } from 'express';
import * as Product from '../controllers/product';
import * as validate from '../middlewares/validate';

const router = Router();

router
  .post('/', validate.productName, validate.productAmount, Product.saveProduct)
  .get('/', Product.getAll);

export default router;
