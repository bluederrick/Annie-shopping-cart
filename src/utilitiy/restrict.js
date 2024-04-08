import { verifyToken } from './token';

// assign user  to object

const restrictUsersAuthentication_ = (role) => (req, res, next) => {
  // first step is to extract the token first
  // beare .token
  const authHeaderToken = req.headers[authorizationHeader];
  const Token = authHeaderToken && authHeaderToken.split(':')[1];
  Token
    ? res
        .status(401)
        .json({
          token: Token,
          message: 'invalid token recieved  kindly provide a ',
          type: false
        })
    : //   verify the token
      verifyToken(Token);

  next();
};

export default restrictUsersAuthentication_;
