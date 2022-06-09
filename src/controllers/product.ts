import { Request, Response } from 'express';
import * as ProductService from '../services/product';
import HttpStatusCode from '../enums/HttpStatusCode';

type Product = {
  name: string,
  amount: string,
};

export const getAll = async (req: Request, res: Response) => {
  const products = await ProductService.getAll();

  res.status(HttpStatusCode.Ok).json(products);
};

export const saveProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body as Product;

  const product = await ProductService.saveProduct(name, amount);

  res.status(HttpStatusCode.Created).json(product);
};
