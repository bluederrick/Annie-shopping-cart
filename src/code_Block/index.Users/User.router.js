import express from 'express';
import {
  SignUpController,
  deleteController,
  loginController,
  verifyOTPcontroller
} from './User.Controller';

const router = express.Router();

router.post('/Signup', SignUpController);

// router.post('/verifyotp', verifyOTPcontroller)

// router.post('login', loginController);

// router.delete('/delete/:id', deleteController);

// router.post('/sendOTP', send

export default router;
