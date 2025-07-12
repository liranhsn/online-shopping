import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import * as usersService from '../services/user.service';

// eslint-disable-next-line import/prefer-default-export
export const usersRouter = Router();

usersRouter.post('/createUser', async (_req, _res, _next) => {
    const { firstName, lastName, email, phone, password }: registerUserType =
        _req.body.userData;
    try {
        const response = await usersService.createUser({
            firstName,
            lastName,
            email,
            phone,
            password,
        });
        _res.json(response);
    } catch (error) {
        _next(error);
    }
});

usersRouter.post('/login', async (_req, _res, _next) => {
    const { password, email } = _req.body.userData;
    try {
        const response = await usersService.login({
            loginPassword: password,
            loginEmail: email,
        });
        _res.json(response);
    } catch (error) {
        _next(error);
    }
});
