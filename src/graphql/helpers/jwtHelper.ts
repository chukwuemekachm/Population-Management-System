import * as jwt from 'jsonwebtoken';

interface IPayload {
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
export const generateToken = (payload: IPayload): string =>
  jwt.sign(payload, APP_SECRET, { expiresIn: '72h' });
