import { Request, Response } from 'express';
import * as UserService from '../services/user';
import HttpStatusCode from '../enums/HttpStatusCode';
import * as tokenFunctions from '../auth/token';

type User = {
  username: string,
  classe: string,
  level: number,
  password: string
};

export const getAll = async (): Promise<void> => {};

export const saveUser = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body as User;

  const user = await UserService.saveUser(username, classe, level, password);

  const token = tokenFunctions.generateToken(user);

  res.status(HttpStatusCode.Created).json({ token });
};
