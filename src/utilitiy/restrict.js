import { verifyToken } from './token';
import express from 'express';

// assign user  to object

const restrictUsersAuthentication_ = (obj, _R, next) => {
  // first step is to extract the token first

  const authHeaderToken = obj.headers['authorization'];
  //  authorization = bearer <token>
  console.log(authHeaderToken);
  const Token = authHeaderToken && authHeaderToken.split(' ')[1];
  // req.Token = Token;
  console.log(Token);
  Token
    ? verifyToken(Token)
    : _R.status(403).json({
        token: Token,
        message: 'invalid token recieved  kindly provide a token ',
        type: false
      });
  //   verify the token

  next();
};

export const authorizedUser = (req, res, next) => {
  const token = restrictUsersAuthentication_(req, res, next);
};
