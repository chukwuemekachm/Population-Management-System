import { GraphQLResolveInfo } from 'graphql';
import { AuthResponse, Context } from '../../types';

export interface SignupInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ArgsSignup {
  user: SignupInput;
}

export type SignupResolver = (
  parent: undefined,
  args: ArgsSignup,
  ctx: Context,
  info?: GraphQLResolveInfo | null,
) => AuthResponse | Promise<AuthResponse>;

interface AuthMutation {
  signup: SignupResolver;
}

export default AuthMutation;
