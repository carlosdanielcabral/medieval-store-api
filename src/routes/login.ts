import { Router } from 'express';
import * as User from '../controllers/user';
import * as validate from '../middlewares/validate';

const router = Router();

router
  .post(
    '/',
    validate.userName,
    validate.userPassword,
    User.login,
  );

export default router;
