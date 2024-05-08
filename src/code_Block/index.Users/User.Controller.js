import { isValidObjectId } from 'mongoose';

import {
  deleteAccountService,
  loginService,
  signUpService,
  verificationService
} from './User.service.js';

export const SignUpController = async (req, res) => {
  const {
    _id,
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    role,
    verified,
    isAdmin
  } = req.body;

  // ASSIGN USER ROLE TO REQ.BODY

  // console.log(req.body)
  const services = await signUpService({
    _id,
    firstName,
    lastName,
    password,
    email,
    phoneNumber,
    role,
    verified,
    isAdmin
  });
  services
    ? // Assign req touser
      // req.userData=users

      res.status(200).json({
        response: services
      })
    : res.status(400).json({
        response: services,
        status: 400,
        message: 'signup failed'
      });
};

export const verifyOTPcontroller = async (req, res) => {
  const { id } = req.params;
  const { otp } = req.body;
  console.log(req.body);
  const verified = verificationService({ id, otp });
  if (!verified) {
    return res.status(400).json({
      Title: 'user not verified',
      message: "User not verified for signUp'"
    });
  }
  return res.status(200).json({
    Title: 'User verified',
    message: 'User verified for signUp successfully'
  });
};

export const deleteController = async (req, res) => {
  const { id } = req.params;
  if (isValidObjectId(id)) {
    const deleteAccount = await deleteAccountService(id);
    // console.log(deleteAccount);
    if (!deleteAccount) {
      return res.status(400).json({
        response: deleteAccount,
        Title: 'Delete Account failed',
        message: 'ooops! Something went wrong while deleting the account'
      });
    }
    return res.status(200).json({
      repsonse: deleteAccount,
      Title: 'Delete Account',
      message: 'Delete Account successfully'
    });
  }
  // console.log(ObjectId.isValid(id)
};

export const loginController = async (req, res) => {
  const { email, password, role } = req.body;

  const loginUser = await loginService({ email, password, role });
  if (!loginUser) {
    return res.status(401).json({
      Title: 'Error occured while Loging in ',
      Type: false
    });
  }

  return res.status(200).json({
    response: loginUser,
    type: true,
    message: `Login successful`
  });
};
