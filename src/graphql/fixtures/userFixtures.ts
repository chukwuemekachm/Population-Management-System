import { User } from '../types/types';

const data: User[] = [
  {
    id: 'u2m9IN89Unu9u9n9uY',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@mail.com',
    locations: [],
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
  },
];

export const userInputs = [
  {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
  {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@mail.com',
    password: 'Password',
  },
  {
    firstName: 'Test2',
    lastName: 'User2',
    email: 'test2@mail.com',
    password: 'Password',
  },
  {
    firstName: 'Test3',
    lastName: 'User3',
    email: 'test3@mail.com',
    password: 'Password',
  },
];

export const authResponse = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJqb2huQG1haWwuY29tIiwiaWF0IjoxNTE2MjM5MDIyfQ.UUePkDZckx0V1AWfW796a3X15L4eN2EXVEhwhRRQmYg',
  user: data[0],
};

export default data;
