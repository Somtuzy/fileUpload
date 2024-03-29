import { Application } from 'express';
import { HEALTH_CHECK, REDIRECT, LIVE } from '../../configs/index.config'
import { uploadRouter, pingRouter } from './index.route'

const apiVersion = '/api/v1'
export default (app: Application) => {
  app.use(`${apiVersion}/images`, uploadRouter);
  app.use(`${apiVersion}/health`, HEALTH_CHECK);
  app.use(`${apiVersion}/ping`, pingRouter);
  app.use(`${apiVersion}/docs`, REDIRECT);
  app.use(`${apiVersion}/home`, LIVE);
};