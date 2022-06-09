import { NextFunction, Request, Response } from 'express';
import HttpStatusCode from '../enums/HttpStatusCode';
import ErrorHandler from '../interfaces/Error';

const errorMiddlware = (err: ErrorHandler, _req: Request, res: Response, _next: NextFunction) => {
  const status = HttpStatusCode[err.code];

  if (!status) return res.status(500).json({ message: 'Internal Server Error' });

  return res.status(Number(status)).json({ message: err.message });
};

export default errorMiddlware;
