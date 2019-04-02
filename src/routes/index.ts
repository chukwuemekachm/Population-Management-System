import { Router } from 'express';
import { Request, Response } from 'express-serve-static-core';

const routes = Router();

routes.get('/', (request: Request, response: Response) =>
  response.status(200).json({
    status: 'success',
    message:
      'Welcome to Population Management System API, please use the graphql endpoint on /graphql',
  }),
);

routes.all('*', (request: Request, response: Response) =>
  response.status(404).json({
    status: 'fail',
    message: 'Route unavailable',
  }),
);

export default routes;
