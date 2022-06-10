import { NextFunction, Request, Response } from 'express';
import * as UserService from '../services/user';
import HttpStatusCode from '../enums/HttpStatusCode';
import * as tokenFunctions from '../auth/token';

type User = {
  username: string,
  classe: string,
  level: number,
  password: string
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  const user = await UserService.getByUsername(username, password);

  if (Object.keys(user).includes('code')) return next(user);

  const token = tokenFunctions.generateToken(user as User);

  res.status(HttpStatusCode.Ok).json({ token });
};

export const saveUser = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body as User;

  const user = await UserService.saveUser(username, classe, level, password);

  const token = tokenFunctions.generateToken(user);

  res.status(HttpStatusCode.Created).json({ token });
};
