import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import Queries from './queries';

const save = async (name: string, amount: string): Promise<number> => {
  const [result] = await connection.execute<ResultSetHeader>(Queries.SaveUser, [name, amount]);
  return result.insertId;
};

export default save;
