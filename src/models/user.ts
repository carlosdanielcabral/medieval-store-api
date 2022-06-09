import { ResultSetHeader } from 'mysql2';
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

export const getAll = async (): Promise<void> => {};
