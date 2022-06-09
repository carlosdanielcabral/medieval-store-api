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

export const userName: RequestHandler = (req, res, next) => {
  const { username } = req.body;

  const { error: error400 } = Joi.object({
    username: Joi.required(),
  })
    .validate({ username });
    
  if (error400) {
    return next({ code: HttpStatusCode.BadRequest, message: error400.details[0].message });
  }

  const { error: error422 } = Joi.object({
    username: Joi.string().min(3).required(),
  })
    .validate({ username });
  
  if (error422) {
    return next({ code: HttpStatusCode.UnprocessableEntity, message: error422.details[0].message });
  }

  next();
};

export const userClasse: RequestHandler = (req, res, next) => {
  const { classe } = req.body;

  const { error: error400 } = Joi.object({
    classe: Joi.required(),
  })
    .validate({ classe });
    
  if (error400) {
    return next({ code: HttpStatusCode.BadRequest, message: error400.details[0].message });
  }

  const { error: error422 } = Joi.object({
    classe: Joi.string().min(3).required(),
  })
    .validate({ classe });
  
  if (error422) {
    return next({ code: HttpStatusCode.UnprocessableEntity, message: error422.details[0].message });
  }

  next();
};

export const userLevel: RequestHandler = (req, res, next) => {
  const { level } = req.body;

  const { error: error400 } = Joi.object({
    level: Joi.required(),
  })
    .validate({ level });
    
  if (error400) {
    return next({ code: HttpStatusCode.BadRequest, message: error400.details[0].message });
  }

  const { error: error422 } = Joi.object({
    level: Joi.number().min(1).required(),
  })
    .validate({ level });
  
  if (error422) {
    return next({ code: HttpStatusCode.UnprocessableEntity, message: error422.details[0].message });
  }

  next();
};

export const userPassword: RequestHandler = (req, res, next) => {
  const { password } = req.body;

  const { error: error400 } = Joi.object({
    password: Joi.required(),
  })
    .validate({ password });
    
  if (error400) {
    return next({ code: HttpStatusCode.BadRequest, message: error400.details[0].message });
  }

  const { error: error422 } = Joi.object({
    password: Joi.string().min(8).required(),
  })
    .validate({ password });
  
  if (error422) {
    return next({ code: HttpStatusCode.UnprocessableEntity, message: error422.details[0].message });
  }

  next();
};
