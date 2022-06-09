import { RowDataPacket, ResultSetHeader } from 'mysql2';
import Product from '../interfaces/Product';
import connection from './connection';
import Queries from './queries';

export const getAll = async (): Promise<Product[]> => {
  const [result] = await connection.execute<RowDataPacket[]>(Queries.GetAllProducts);
  return result as Product[];
};

export const save = async (name: string, amount: string): Promise<number> => {
  const [result] = await connection.execute<ResultSetHeader>(Queries.SaveProduct, [name, amount]);
  return result.insertId;
};
