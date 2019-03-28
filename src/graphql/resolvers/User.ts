import { User } from '../types/types';

const user = {
  id: ({ id }: User) => id,
  firstName: ({ firstName }: User) => firstName,
  lastName: ({ lastName }: User) => lastName,
  email: ({ email }: User) => email,
  locations: ({ locations }: User) => locations,
  createdAt: ({ createdAt }: User) => createdAt,
  updatedAt: ({ updatedAt }: User) => updatedAt,
};

export default user;
