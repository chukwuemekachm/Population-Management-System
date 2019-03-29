import AuthMutation from './AuthMutation';
import {
  ArgsSignup,
  ArgsLogin,
} from '../../types/resolvers/mutation/AuthMutation';
import { Context } from '../../types/types';
import MutationResolvers from '../../types/resolvers/mutation';

const mutation: MutationResolvers = {
  signup: (parent: undefined, args: ArgsSignup, context: Context) =>
    AuthMutation.signup(parent, args, context),
  login: (parent: undefined, args: ArgsLogin, context: Context) =>
    AuthMutation.login(parent, args, context),
};

export default mutation;
