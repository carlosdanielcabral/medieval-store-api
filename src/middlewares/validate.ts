import { RequestHandler } from 'express';
import Joi from 'joi';

export const productName: RequestHandler = (req, res, next) => {
  const { name } = req.query;

  const { error } = Joi.object({
    name: Joi.string().min(3).required(),
  })
    .validate({ name });
  
  if (error) return next(error);

  next();
};

export const productAmount: RequestHandler = (req, res, next) => {
  const { amount } = req.query;

  const { error } = Joi.object({
    amount: Joi.string().min(3).required(),
  })
    .validate({ amount });

  if (error) return next(error);

  next();
};
