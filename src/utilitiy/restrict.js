import { getUserToken, verifyToken } from './token.js';
import express from 'express';
import config from '../config.js';
const SECRET_KEY = config.SECRET_KEY;
import jwt from 'jsonwebtoken';

// assign user  to object
const restrictUsersAuthentication_ = (obj, _R, next) => {
  // first step is to extract the token first

  const authHeaderToken = obj.headers['authorization'];
  //  authorization = bearer <token>
  // console.log(authHeaderToken);
  const Token = authHeaderToken && authHeaderToken.split(' ')[1];
  // console.log(Token);
  if (Token == null) return _R.status(401);

  const verified = verifyToken(Token, SECRET_KEY, obj);
  // console.log(verified);
  !verified == null
    ? _R.status(422).json({
        type: false,
        status: 401,
        title: 'Authorization Required',
        message: 'No token provided'
      })
    : _R.status(200).json({
        Title: 'Authorized',
        message: 'Validate Token'
      });

  next();
};

export const authorizedUser = (req, res, next) => {
  const Authorization = restrictUsersAuthentication_(req, res, next);

  res.send(Authorization);
};

const AdminAuthorization_validation = (obj, _R, next) => {};
// Role authorization for Admin------
export const adminAuthorized = (req, res, next) => {
  const isToken = getUserToken(req);

  // console.log(isToken);
  if (!isToken || isToken === undefined) {
    return res.status(403).send(`unAthorized access ${isToken}`);
  }
  //  Verify Token provided by User

  const isVerified = jwt.verify(isToken, SECRET_KEY, (err, decoded) => {
    if (err) {
      return {
        res: err.message,
        Type: false,
        message: `Invalid token`
      };
    }
    ({
      Data: decoded,
      Type: true,
      message: `Valid token for Admin`
    });

    // console.log(decoded);
    req.data = decoded.role;
    // console.log(req.data);
    if (!req.data === 'ADMIN') {
      console.log('Aunthorized');
      return res.status(403).json({
        message: 'Aunthorized request'
        // });
      });
      // console.log(req.data);
    }
    next();
  });
  console.log(isVerified);
};
