import { isValidObjectId } from 'mongoose';
import { ObjectId } from 'mongodb';
import { deleteAccountService, signUpService } from './User.service.js';

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
  console.log(services, ' derrick is a soft ware developer');
  services
    ? // return res.json({ services: services });
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
  const { id, otp } = req.body;
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
    console.log(deleteAccount);
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
  const { userName, password } = req.body;

  const loginUser = await loginService(userName, password);
  if (!loginUser) {
    throw new Error();
  }

  return req.status(200).json({
    response: loginUser,
    type: true,
    message: `Login successful for ` + loginUser.name + ' ' + loginUser
  });
};
