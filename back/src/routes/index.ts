import { Router } from 'express';
import { costumesRouter } from './costume';
import { usersRouter } from './user';

// eslint-disable-next-line import/prefer-default-export
export const appRouter: Router = Router();

appRouter.use('/costumes', costumesRouter);
appRouter.use('/user', usersRouter);
