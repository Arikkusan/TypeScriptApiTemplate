import express from 'express';
import AuthRoute from './AuthRoute';

export const routes = express.Router();

routes.use('/auth', AuthRoute);