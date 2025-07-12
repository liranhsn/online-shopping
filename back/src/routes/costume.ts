import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import * as costumeService from '../services/costume.service';

// eslint-disable-next-line import/prefer-default-export
export const costumesRouter = Router();

costumesRouter.get('/', async (_req, _res, _next) => {
    try {
        const response = await costumeService.getCostumes();
        _res.json(response);
    } catch (error) {
        _next(error);
    }
});

costumesRouter.get('/:costumeId', async (_req, _res, _next) => {
    try {
        const { costumeId } = _req.params;
        const response = await costumeService.getCostumeById(costumeId);
        _res.json(response);
    } catch (error) {
        _next(error);
    }
});
