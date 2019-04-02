import { ApolloError } from 'apollo-server-core';

class DuplicateInputError extends ApolloError {
  constructor(message: string) {
    super(message, 'DUPLICATE_INPUT_VALUE');

    Object.defineProperty(this, 'name', { value: 'DuplicateInputError' });
  }
}

export default DuplicateInputError;
