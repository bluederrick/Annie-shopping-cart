import { verifyToken } from './token.js';
import express from 'express';
import config from '../config.js';
const SECRET_KEY = config.SECRET_KEY;

// assign user  to object
const restrictUsersAuthentication_ = (obj, _R, next) => {
  // first step is to extract the token first

  const authHeaderToken = obj.headers['authorization'];
  //  authorization = bearer <token>
  // console.log(authHeaderToken);
  const Token = authHeaderToken && authHeaderToken.split(' ')[1];
  console.log(Token);
  if (Token == null) return _R.status(401);

  const verified = verifyToken(Token, SECRET_KEY, obj);
  console.log(verified);
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
  console.log();
  next();
};

export const authorizedUser = (req, res, next) => {
  const Authorization = restrictUsersAuthentication_(req, res, next);

  res.send(Authorization);
};

const AdminAuthorization_validation = (obj, _R, next) => {};
// Role authorization for Admin------
export const adminAuthorized = (req, res, next) => {
  const Token = getUserToken(req);
  if (!Token) return res.status(403).send(`unAthorized access ${Token}`);
  //  Verify Token provided by User

  return new Promise((resolve, reject) => {
    const isVerified = verifyToken(Token, SECRET_KEY, (err, decode));
    if (!isVerified) {
      resolve({
        Title: '  Token',
        message: 'Verified token'
      });

      Object.assign(req, {
        context: {
          decode: decode.role
        }
      });
    }
    console.log(req.context.decode);
    console.log('derrick is hebrew boy');
    //  req.Role =
  });
};
