import express from 'express';
import {
  SignUpController,
  deleteController,
  loginController,
  updatePasswordController,
  verifyOTPcontroller
} from './User.Controller.js';
import { adminAuthorized } from '../../Utilitiy/restrict.js';

// import restrictUsersAuthentication_ from '../../utilitiy/restrict.js';

const router = express.Router();

router.post('/Signup', SignUpController);

router.patch('/verifyotp/:id', verifyOTPcontroller);

router.post('/login', loginController);

router.delete('/delete/:id', adminAuthorized, deleteController);

router.put('/change-password', updatePasswordController);

// router.put('/change-phonenumber', updatePhoneNumberController);

export default router;
