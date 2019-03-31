import { User, Context } from '../types/types';

const user = {
  id: ({ id }: User) => id,
  firstName: ({ firstName }: User) => firstName,
  lastName: ({ lastName }: User) => lastName,
  email: ({ email }: User) => email,
  locations: ({ id }: User, args: {}, { prisma }: Context) =>
    prisma.user({ id }).locations(),
  createdAt: ({ createdAt }: User) => createdAt,
  updatedAt: ({ updatedAt }: User) => updatedAt,
};

export default user;
