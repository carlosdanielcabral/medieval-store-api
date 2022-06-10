import ERRORS from '../consts/Errors';
import ErrorHandler from '../interfaces/Error';
import User from '../interfaces/User';
import * as UserModel from '../models/user';

export const saveUser = async (
  username: string,
  classe: string,
  level: number,
  password: string,
): Promise<User> => {
  const id = await UserModel.save(username, classe, level, password);
  return { id, username, classe, level, password };
};

export const getByUsername = async (
  username: string,
  password: string,
): Promise<User | ErrorHandler> => {
  const user = await UserModel.getByUsername(username);

  if (!user || user.password !== password) return ERRORS.UserDataInvalid;

  return user;
};
