import * as bcrypt from 'bcryptjs';

import AuthMutationInterface, {
  ArgsLogin,
  LoginResolver,
} from '../../types/resolvers/mutation/AuthMutation';
import { Context } from '../../types/types';
import { generateToken } from '../../helpers/jwtHelper';
import validateRequest from '../../validators';
import { UserValidator } from '../../validators/UserValidator';
import { AuthResponse, User } from '../../types/types';
import {
  SignupResolver,
  ArgsSignup,
} from '../../types/resolvers/mutation/AuthMutation';
import { AuthenticationError } from 'apollo-server-core';
import { User as PrismaUser } from '../../prisma/generated/prisma-client';
import DuplicateInputError from '../../errors/DuplicateInputError';

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

      throw new DuplicateInputError(
        'A user with your email: ${email} already exists',
      );
    } catch (err) {
      throw err;
    }
  };

  /**
   * @description Login's in a user on the platform
   * Returning the user's token and profile
   *
   * @param {object} parent The previous GraphQL object
   * @param {object} args The request payload
   * @param {object} context The request context
   *
   * @returns {object}
   */
  login: LoginResolver = async (
    parent: undefined,
    { user: userInput }: ArgsLogin,
    { prisma }: Context,
  ): Promise<AuthResponse> => {
    try {
      await validateRequest(UserValidator, userInput);
      const { email, password } = userInput;
      const user: Partial<PrismaUser> = await prisma.user({ email });
      if (!user) {
        throw new AuthenticationError('Invaild credentials');
      }

      const valid = await bcrypt.compare(password, <string>user.password);
      if (!valid) {
        throw new AuthenticationError('Invaild credentials');
      }
      const token = generateToken({ email, id: user.id });

      return {
        token,
        user: <User>user,
      };
    } catch (err) {
      throw err;
    }
  };
}

export default new AuthMutation();
