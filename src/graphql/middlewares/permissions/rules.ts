import { GraphQLResolveInfo } from 'graphql';
import { AuthenticationError } from 'apollo-server-core';

import { Context, User } from '../../types/types';
import { decodeToken } from '../../helpers/jwtHelper';

/**
 * @description This Rule confirms that a user is authenticated
 *
 * @param {object} resolve The GraphQL resolve function
 * @param {undefined} parent The previous GraphQL object
 * @param {object} args The request payload
 * @param {object} context The request context
 * @param {object} info The GraphQL info object
 *
 * @returns {object}
 */
export const isAuthenticated = (
  resolve: Function,
  parent: undefined,
  args: Record<string, any>,
  context: Context,
  info: GraphQLResolveInfo,
) => {
  try {
    const { id, email } = <User>decodeToken(context);
    if (!id)
      throw new AuthenticationError(
        'Authentication is needed for this operation',
      );
    context.user = { id, email };
    return resolve(parent, args, context, info);
  } catch (error) {
    throw new AuthenticationError(
      'Authentication is needed for this operation',
    );
  }
};
