import { SignupResolver, LoginResolver } from './AuthMutation';
import { CreateLocationResolver } from './LocationMutation';

interface MutationResolvers {
  signup: SignupResolver;
  login: LoginResolver;
  createLocation: CreateLocationResolver;
  [key: string]: any;
}

export default MutationResolvers;
