import { AuthResponse, User } from '../types/types';

const authResponse = {
  token: ({ token }: AuthResponse): string => token,
  user: ({ user }: AuthResponse): Partial<User> => user,
};

export default authResponse;
