import { RowDataPacket } from 'mysql2';
import Product from '../interfaces/Product';
import connection from './connection';
import Queries from './queries';

export const getAll = async (): Promise<Product[]> => {
  const [result] = await connection.execute<RowDataPacket[]>(Queries.GetAllProducts);
  return result as Product[];
};

export const save = async (name: string, amount: string): Promise<{ insertedId: number }> => {
  const [result] = await connection.execute<RowDataPacket[]>(Queries.SaveProduct, [name, amount]);
  const { insertedId } = result[0];
  return insertedId;
};
