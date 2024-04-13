import jwt from 'jsonwebtoken';
import config from '../config';
import { handleErrors } from './errorHandlers';
const REFRESH_KEY = config.REFRESH_KEY;
const SECRET_KEY = config.SECRET_KEY;
const key = { key: process.env.SECRET_KEY };
const max_age = 3 * 24 * 60 * 60;

export const accessToken = (data, token) => {
  return jwt.sign(
    data,
    token,
    { algorithm: 'HS256' },
    { expiresIn: max_age },
    (err, token) => {
      err && err.message
        ? console.log({
            status: 422,
            title: 'System Error',
            type: false,
            message: 'Unable to generate token'
          })
        : console.log({
            message: 'token created for user authentification'
          });
    }
  );
};

export const refreshToken = (data, token) => {
  return jwt.sign(data, token, (err, refreshToken) => {
    err && err.message
      ? console.log({
          status: 422,
          title: 'System Error',
          type: false,
          message: 'Unable to generate refresh token'
        })
      : {
          auth: true,
          token: token
        };
    console.log({
      message: 'Refresh token created for user authentification'
    });
  });
};

export const verifyToken = (tokenData) => {
  return jwt.verify(tokenData, SECRET_KEY, (err, _authData) => {
    if (err) {
      throw err;
    }
    // req.token = _authData;
  });
};
