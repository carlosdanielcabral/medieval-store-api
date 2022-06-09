import Order from '../interfaces/Order';
import * as OrderModel from '../models/order';

export const getAll = async (): Promise<Order[]> => OrderModel.getAll();

export const saveProduct = (): void => {};
