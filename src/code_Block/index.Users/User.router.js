import express from 'express';
import {
  SignUpController,
  deleteController,
  loginController,
  verifyOTPcontroller
} from './User.Controller.js';
// import restrictUsersAuthentication_ from '../../utilitiy/restrict.js';

const router = express.Router();

// router.post('/Signup', SignUpController);

// router.patch('/verifyotp/:id', verifyOTPcontroller);

router.post('/login', loginController);

// router.delete('/delete/:id', deleteController);

// router.post('/sendOTP', send

export default router;
