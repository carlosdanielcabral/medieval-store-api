import { RowDataPacket } from 'mysql2';
import Order from '../interfaces/Order';
import * as ProductModel from './product';
import connection from './connection';
import Queries from './queries';

export const getAll = async (): Promise<Order[]> => {
  const [result] = await connection.execute<RowDataPacket[]>(Queries.GetAllOrders);
  const allOrders = result as Order[];
  const allProducts = await ProductModel.getAll();
  const allOrderProducts = allOrders.map((order: Order) => {
    const product = allProducts.filter((productData) => productData.orderId === order.id);
    const productIds = product.map((productData) => productData.id) as number[];
    const newOrder = order;
    newOrder.productsIds = productIds;

    return newOrder;
  });

  return allOrderProducts;
};

export const save = async (): Promise<void> => {};
