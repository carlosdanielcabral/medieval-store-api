import { Request, Response } from 'express';
import * as OrderService from '../services/order';
import HttpStatusCode from '../enums/HttpStatusCode';

export const getAll = async (req: Request, res: Response) => {
  const orders = await OrderService.getAll();

  res.status(HttpStatusCode.Ok).json(orders);
};

export const saveOrder = (): void => {};
