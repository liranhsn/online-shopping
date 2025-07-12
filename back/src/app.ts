import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import morganHandler from './middlewares/morgan';
import errorHandler from './middlewares/errorHandlers';
import { appRouter } from './routes';
import mongoConnect from './db/mongo';

dotenv.config();
mongoConnect();

const app = express(); // sonerlint`

app.use(express.json());
app.use(cors());
app.use(bodyParser.text());
app.use(
    morganHandler,
    morgan(
        ':method :url :status :res[content-length] - :response-time ms :body',
    ),
);

app.get('/', (_req, res) => {
    res.send('ok');
});

app.use('/api', appRouter);
app.use(errorHandler);

export default app;
