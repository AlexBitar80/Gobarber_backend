import { Router } from 'express';

import SessionsController from '../controllers/SessionsController';

const sessionsRoute = Router();
const sessionsControlle = new SessionsController();

sessionsRoute.post('/', sessionsControlle.create);

export default sessionsRoute;
