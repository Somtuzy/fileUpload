import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

import asyncError from './errors.middleware';
import mainRoute from '../routes/main.route';

import '../wakey';
import { PAGE_NOT_FOUND, connectToDatabase, CORS_CONFIG } from '../../configs/index.config';
connectToDatabase

export default (app: Application) => {
  app.use(morgan("common"));
  app.use(cors(CORS_CONFIG));
  app.use(helmet());
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  mainRoute(app);
  app.use(PAGE_NOT_FOUND)
  app.use(asyncError);
};