import jwt from 'jsonwebtoken';
import config from '../config.js';
import { handleErrors } from './errorHandlers.js';
const REFRESH_KEY = config.REFRESH_KEY;

const key = { key: process.env.SECRET_KEY };
const max_age = 3 * 24 * 60 * 60;

export const accessToken = (data, token_) => {
  return jwt.sign(
    data,
    token_,
    { algorithm: 'HS256' },
    { expiresIn: max_age },
    (err, token_) => {
      err && err.message
        ? console.log({
            status: 422,
            title: 'System Error',
            type: false,
            message: 'Unable to generate token'
          })
        : console.log({
            message: 'token created for user authentification',
            Type: true
          });
    }
  );
};

export const refreshToken = (data, token) => {
  return jwt.sign(
    data,
    token,
    { algorithm: 'HS256' },
    { expiresIn: '15s' },
    (err, refreshToken) => {
      err && err.message
        ? console.log({
            status: 422,
            title: 'System Error',
            type: false,
            message: 'Unable to generate refresh token'
          })
        : {
            auth: true,
            token: token,
            message: 'Refresh token created'
          };
    }
  );
};

export const verifyToken = (tokenData, Secret, req) => {
  return jwt.verify(tokenData, Secret, (err, decoded) => {
    if (err) {
      return {
        res: err.message,
        Type: false,
        message: `Invalid token`
      };
    }
    req.data = decoded.role;
    console.log();
  });
  next();
};

export const getUserToken = (obj) => {
  const authHeaderToken = obj.headers['authorization'];
  const AdminToken = authHeaderToken && authHeaderToken.split(' ')[1];
  return AdminToken;
  // console.log(authHeaderToken);
  // if (authHeaderToken == null)
  // return 'Kindly provide a Token for authentification purposes';
  return authHeaderToken;
};
