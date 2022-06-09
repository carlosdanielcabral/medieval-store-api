import { NextFunction, Request, Response } from 'express';
import ErrorHandler from '../interfaces/Error';

const errorMiddlware = (err: ErrorHandler, _req: Request, res: Response, _next: NextFunction) => {
  if (!err.code) return res.status(500).json({ message: 'Internal Server Error' });

  return res.status(err.code).json({ message: err.message });
};

export default errorMiddlware;
