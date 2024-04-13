import { object, date, mixed, oneOf, number, string } from 'yup';
import { gender } from '../../utilitiy/constants';

export const UserValidator = object({
  name: string().required('name is required for this user'),
  username: string().required(' username is required '),
  password: string().required(' password is required'),
  sex: mixed().oneOf(gender).defined()
});

export const signUpValidator = object({
  firstName: string().required(' firstname is a required feild'),
  lastName: string().required(' lastname is  a required field '),
  email: string().required(
    'kindly provide  user E-mail is required for this user'
  ),
  phoneNumber: number().required('phone number is required for this user'),
  role: string().required('role is required for this user')
});

//

export const loginValidator = object({
  email: string().required('email is required for login'),
  password: string().required('password is required for login')
});
