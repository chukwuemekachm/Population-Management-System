import { SignupResolver, LoginResolver } from './AuthMutation';

interface MutationResolvers {
  signup: SignupResolver;
  login: LoginResolver;
  [key: string]: any;
}

export default MutationResolvers;
