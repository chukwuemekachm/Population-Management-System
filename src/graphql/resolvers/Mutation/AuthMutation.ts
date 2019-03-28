import * as bcrypt from 'bcryptjs';

import AuthMutationInterface from '../../types/resolvers/mutation/AuthMutation';
import { Context } from '../../types/types';
import { generateToken } from '../../helpers/jwtHelper';
import validateRequest from '../../validators';
import { UserValidator } from '../../validators/UserValidator';
import { AuthResponse, User } from '../../types/types';
import {
  SignupResolver,
  ArgsSignup,
} from '../../types/resolvers/mutation/AuthMutation';
import { UserInputError } from 'apollo-server-core';

class AuthMutation implements AuthMutationInterface {
  /**
   * @description Signs up a user to the platform
   * Returning the user's token and profile
   *
   * @param {object} parent The previous GraphQL object
   * @param {object} args The request payload
   * @param {object} context The request context
   *
   * @returns {object}
   */
  signup: SignupResolver = async (
    parent: undefined,
    { user: userInput }: ArgsSignup,
    { prisma }: Context,
  ): Promise<AuthResponse> => {
    try {
      await validateRequest(UserValidator, userInput);
      const { firstName, lastName, email, password } = userInput;

      const user = await prisma.user({ email });
      if (!user) {
        const passwordHash: string = await bcrypt.hash(password, 10);
        const newUser: Partial<User> = await prisma.createUser({
          email,
          password: passwordHash,
          firstName,
          lastName,
        });
        const token = generateToken({ email, id: newUser.id });

        return {
          token,
          user: newUser,
        };
      }

      throw new UserInputError('User with email exists', {
        email: `A user with your email: ${email} already exists`,
      });
    } catch (err) {
      throw err;
    }
  };
}

export default new AuthMutation();
