import * as jwt from 'jsonwebtoken';

import { Context } from '../types/types';

interface Payload {
  email: string;
  id?: string;
}

const APP_SECRET = <string>process.env.APP_SECRET;

/**
 * @description Signs a JWT token
 *
 * @param {object} payload The payload to sign
 *
 * @returns {string}
 */
export const generateToken = (payload: Payload): string =>
  jwt.sign(payload, APP_SECRET, { expiresIn: '72h' });

/**
 * @description Decodes a JWT token
 * Returns the payload or a false
 *
 * @param {object} context The request object in the context
 *
 * @returns {string | object | boolean}
 */
export const decodeToken = ({
  request,
}: Context): string | object | boolean => {
  try {
    const authorization = request.get('Authorization');
    if (authorization) {
      const token = authorization.replace('Bearer ', '');
      return jwt.verify(token, APP_SECRET);
    }
    throw false;
  } catch (error) {
    return false;
  }
};
