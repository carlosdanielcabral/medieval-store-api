import Product from '../interfaces/Product';
import * as ProductModel from '../models/product';

export const getAll = async (): Promise<Product[]> => ProductModel.getAll();

export const saveProduct = async (name: string, amount: string): Promise<Product> => {
  const id = await ProductModel.save(name, amount);
  return { id, name, amount };
};
