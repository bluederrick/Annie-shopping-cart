import _User from '../../Models/User';
import { GenerateOTP } from '../../Generic services/generateOTP';
import { duplicateDTO, findLogin, save } from '../../utilitiy/DB_Executer';
import { accessToken } from '../../utilitiy/token';
import jwt from 'jsonwebtoken';
import { loginValidator, signUpValidator } from './User.validator';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import config from '../../config';
import { user } from '../../utilitiy/Fn.excute';
import _Otp from '../../Models/useOTPVerificaition';
import {
  sendOTPVerfication,
  verifyOTPservice
} from '../OTPverification.js/OTP.service';
const TOKENKEY = 'tokenkey';
const SECRET_KEY = config.SECRET_KEY;

// const salt = bcrypt.genSaltSync(10);

export const signUpService = async (data) => {
  const userDTO = await signUpValidator.validate({ ...data });
  const email = data.email;

  const isNewUser = await _User.isEmailExist(email);
  console.log(isNewUser, ' derrick');
  if (isNewUser === true) {
    console.log('user already exist');
    return {
      Title: ' user already exist',
      message: 'signup failed , user already exist in the database',
      data: {
        type: false,
        res: isNewUser
      }
    };
  }
  console.log('eric is back');
  const password_Len = {
    password: userDTO.password
  };
  let userPassword;
  userPassword = Object.values(password_Len)[0];
  console.log(userPassword);
  // const _userpassword = user(userPassword)(10);
  if (!userPassword) {
    return {
      title: 'Hashing failed',
      message: 'Error occured while hashing user password'
    };
  }
  // TODO: hash the password using bcyrpt
  const _userpassword = await bcrypt.hash(userPassword, 10);
  // create a payload for the token ;
  const payloadDTO = {
    id: uuid(),
    email: userDTO.email,
    role: userDTO.role
  };

  // TODO :  generate access token and save to he database
  const token = accessToken(payloadDTO, SECRET_KEY);
  if (!token) {
    return {
      auth: false,
      title: `token not found`,
      message: `Invalid token ${token}`
    };
  }

  const unverifiedUser = await new _User({
    id: uuid(),
    firstName: userDTO.firstName,
    lastName: userDTO.lastName,
    phoneNumber: userDTO.phoneNumber,
    email: userDTO.email,
    password: _userpassword,
    role: userDTO.role,
    verified: false,
    isAdmin: true
  });
  //   console.log(unverifiedUser);
  const userData = await unverifiedUser
    .save()
    .then((result) => {
      console.log(result);
      return {
        message: 'user saved successfully',
        data: result
      };
    })
    .catch((error) => {
      message: error.message;
    });

  //   console.log(userData);
  const userVerifiedData = Object.values(userData);
  console.log(userVerifiedData);
  // console.log(userData.data);

  // return userData

  const OTPverified = await sendOTPVerfication(userData.data);
  console.log(OTPverified);
  return {
    verify: OTPverified,
    data: userData
  };
};
// export const verificationService = async (data) => {
//   await verifyOTPservice(data);
// };

export const deleteAccountService = async (id) => {
  // delete user record from database
  const deletedUser = await _User.findOneAndDelete({ _id: id });
  // console.log(deletedUser)
  if (deletedUser == null || !deletedUser) {
    return {
      Title: 'deleting user Failed ',
      message: 'oooops !!!!deletedUser failed '
    };
  }
  return {
    Title: 'deleting user  ',
    message: 'deleting user success'
  };
  // const deletedUser = await _User.findById(userId, (err, doc) => {

  //     if (!deletedUser) {
  //         return {
  //             message: " something went wrong",
  //             status: 404
  //         }
  //     }
  //     doc.remove(() => {
  //         return {
  //             title: "Delete",
  //             message: "user deleted successful"
  //         }
  //     })
  // })
};

export const loginService = async (obj) => {
  const DTO = await loginValidator.validate(obj);
  if (!DTO) {
    return {
      type: false,
      message: 'please provide login credentials',
      respone: DTO
    };
  }

  const isFinderExist = await findLogin(_User)(DTO.user)(DTO.password);

  if (isFinderExist) {
    return {
      type: false,
      message: 'Please provide a correct login credentials  for the login',
      Credential: isFinderExist
    };
  }
  const isPasswordValid = await bcrypt.compare(_User.password, DTO.password);
  if (!isPasswordValid) {
    return ` passwords is invalid please try again {isPasswordValid}`;
  }
};

export const updateUser = () => {};
