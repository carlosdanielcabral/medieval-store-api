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

export const getAll = async (): Promise<void> => {};
