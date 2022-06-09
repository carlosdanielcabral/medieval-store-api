import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../interfaces/User';

dotenv.config();

const secret = 'ARedGOIY1GnEXelbNePtuseDUkOEAuvJ';

export const generateToken = (user: User) => {
  const { password, ...data } = user;
  const token = jwt.sign({ data }, secret, { expiresIn: '12h',
    algorithm: 'HS256',
  });

  return token;
};

export const validateUser = (): void => {};
