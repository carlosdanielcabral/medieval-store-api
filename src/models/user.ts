import { ResultSetHeader, RowDataPacket } from 'mysql2';
import User from '../interfaces/User';
import connection from './connection';
import Queries from './queries';

export const save = async (
  username: string,
  classe: string,
  level: number,
  password: string,
): Promise<number> => {
  const [result] = await connection.execute<ResultSetHeader>(
    Queries.SaveUser,
    [username, classe, level, password],
  );
  return result.insertId;
};

export const getByUsername = async (username: string): Promise<User> => {
  const [result] = await connection.execute<RowDataPacket[]>(Queries.GetUserByUsername, [username]);
  return result[0] as User;
};
