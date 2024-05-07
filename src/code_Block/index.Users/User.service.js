import _User from '../../Models/User.js';
import { GenerateOTP } from '../../Generic services/generateOTP.js';
import { duplicateDTO, findLogin } from '../../utilitiy/DB_Executer.js';
import { accessToken, refreshToken } from '../../utilitiy/token.js';
import jwt from 'jsonwebtoken';
import { loginValidator, signUpValidator } from './User.validator.js';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import config from '../../config.js';
import { user } from '../../utilitiy/Fn.excute.js';
import _Otp from '../../Models/useOTPVerificaition.js';
import {
  sendOTPVerfication,
  verifyOTPservice
} from '../OTPverification.js/OTP.service.js';
const TOKENKEY = 'tokenkey';
const SECRET_KEY = config.SECRET_KEY;
const REFRESH_KEY = config.REFRESH_KEY;

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
  // const token = accessToken(payloadDTO, SECRET_KEY);
  // if (!token) {
  //   return {
  //     auth: false,
  //     title: `token not found`,
  //     message: `Invalid token ${token}`
  //   };
  //   console.log(token, 'token');
  // }
  // console.log('token :', token);
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
        data: result,
        token: `token ${token}`
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
export const verificationService = async (data) => {
  await verifyOTPservice(data);
};

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
  const DB = await _User.find({ email: DTO.email });

  const DBpassword = DB[0].password;
  const email = DTO.email;

  const isEmailExist = await _User.findOne({ email });
  if (!isEmailExist) {
    console.log('Kindly enter the correct data');
    return `Kindly enter the correct data , ${isEmailExist}`;
  }

  // const isFinderExist = await findLogin(_User)(DTO.user)(DTO.password);

  const userPassword = DTO.password;
  const userEmail = DTO.email;

  const isPasswordValid = await bcrypt.compare(
    userPassword,
    DBpassword,
    (error, result) => {
      if (error) {
        return {
          Title: 'incorrect password entry',
          type: false,
          message: `incorrect password input for ${userPassword}`
        };
      }
      console.log(result, 'password is correct');
    }
  );

  const token = accessToken(DTO, SECRET_KEY);
  const refresherToken = refreshToken(DTO, REFRESH_KEY);
  console.log(refresherToken);
  if (!token && !refresherToken) {
    return {
      auth: false,
      title: `token not found`,
      message: `Invalid token ${token}`,
      result: {
        token: token
      }
    };
  }
  // console.log(token);
  return {
    token: token,
    refreshToken: refresherToken
  };
};

export const updateUserInfo = () => {};
