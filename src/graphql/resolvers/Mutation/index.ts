import AuthMutation from './AuthMutation';
import { ArgsSignup } from '../../types/resolvers/mutation/AuthMutation';
import { Context } from '../../types/types';

export default {
  signup: (parent: undefined, args: ArgsSignup, context: Context) =>
    AuthMutation.signup(parent, args, context),
};
