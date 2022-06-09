import { RequestHandler } from 'express';
import Joi from 'joi';
import HttpStatusCode from '../enums/HttpStatusCode';

export const productName: RequestHandler = (req, res, next) => {
  const { name } = req.body;

  const { error: error400 } = Joi.object({
    name: Joi.required(),
  })
    .validate({ name });
    
  if (error400) {
    return next({ code: HttpStatusCode.BadRequest, message: error400.details[0].message });
  }

  const { error: error422 } = Joi.object({
    name: Joi.string().min(3).required(),
  })
    .validate({ name });
  
  if (error422) {
    return next({ code: HttpStatusCode.UnprocessableEntity, message: error422.details[0].message });
  }

  next();
};

export const productAmount: RequestHandler = (req, res, next) => {
  const { amount } = req.body;

  const { error: error400 } = Joi.object({
    amount: Joi.required(),
  })
    .validate({ amount });

  if (error400) {
    return next({ code: HttpStatusCode.BadRequest, message: error400.details[0].message });
  }

  const { error: error422 } = Joi.object({
    amount: Joi.string().min(3).required(),
  })
    .validate({ amount });

  if (error422) {
    return next({ code: HttpStatusCode.UnprocessableEntity, message: error422.details[0].message });
  }

  next();
};
