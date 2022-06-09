import { Router } from 'express';
import * as User from '../controllers/user';
import * as validate from '../middlewares/validate';

const router = Router();

router
  .post(
    '/',
    validate.userName,
    validate.userClasse,
    validate.userLevel,
    validate.userPassword,
    User.saveUser,
  );

export default router;
