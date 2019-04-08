import { GraphQLResolveInfo } from 'graphql';

import { AuthResponse, Context } from '../../types';

export interface SignupInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface ArgsSignup {
  user: SignupInput;
}

export interface ArgsLogin {
  user: LoginInput;
}

export type SignupResolver = (
  parent: undefined,
  args: ArgsSignup,
  ctx: Context,
  info?: GraphQLResolveInfo | null,
) => AuthResponse | Promise<AuthResponse>;

export type LoginResolver = (
  parent: undefined,
  args: ArgsLogin,
  ctx: Context,
  info?: GraphQLResolveInfo | null,
) => AuthResponse | Promise<AuthResponse>;

interface AuthMutation {
  signup: SignupResolver;
  login: LoginResolver;
}

export default AuthMutation;
