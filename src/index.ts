import 'dotenv/config';
import express from 'express';
import { Request, Response, NextFunction } from 'express-serve-static-core';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import graphqlServer from './graphql';
import routes from './routes';

const app = express();
const { NODE_ENV, PORT = 3000 } = process.env;
const isProduction = NODE_ENV === 'production';

/**
 * Middleware Declarations
 */

// cors middleware
app.use((request: Request, response: Response, next: NextFunction) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

// body parser and helmet middleware
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GraphQL middleware
graphqlServer.applyMiddleware({ app });

// REST API routes middleware
app.use(routes);

// Error Handler
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) =>
    response.status(500).json({
      message: 'Internal server error',
      error: isProduction ? null : error,
    }),
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`GraphQL endpoint is ${graphqlServer.graphqlPath}`);
});

export default app;
