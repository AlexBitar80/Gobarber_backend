import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import SessionsController from '../controllers/SessionsController';

const sessionsRoute = Router();
const sessionsControlle = new SessionsController();

sessionsRoute.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessionsControlle.create,
);

export default sessionsRoute;
