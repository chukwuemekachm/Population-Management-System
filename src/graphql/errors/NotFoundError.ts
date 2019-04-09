import { ApolloError } from 'apollo-server-core';

class NotFoundError extends ApolloError {
  constructor(message: string) {
    super(message, 'RESOURCE_NOT_FOUND');

    Object.defineProperty(this, 'name', { value: 'NotFoundError' });
  }
}

export default NotFoundError;
