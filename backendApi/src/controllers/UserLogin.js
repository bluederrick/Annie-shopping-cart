import express from 'express';
import UserSchema from '../Model/userModel.js';
import user from '../Model/userModel.js'
import bcrypt from 'bcrypt'
import User from '../../database.js';
import jwt from 'jsonwebtoken';
import { APP_SECRET_KEY } from '../config/
let salt = (10)

const UserLogin = async (req, res, ROLE) => {
    const { Email, password } = req.body;

    const login = user.findOne({ Email })
    if (!login) {
        return res.status(403).json({
            message: 'Email not found please enter the correct email address',
            success: false
        })()
    }
    // the ROLE you are trying to   access is not attached to your account then error  fail 
    if (user.ROLE === ROLE) {
        return res.status(403).json({
            message: 'please make sure you have logged in the right portal',
            success: false
        })

    }
    //let us check for password matches
    // user.password is in the database already
    //passin payloads into jwt.sign
    let isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
        let token = jwt.sign({
            ROLE: user.ROLE.admin,
            Username: user.username,
            Email: user.Email
            , APP_SECRET_KEY
        })
        //sign in the token and issue it to the user
    } else
        return res.status(403).json({
            message: 'incorrect password',
            success: false
        })

    let result = {
        Email: user.email, 
        username: user.username,
        token
    }
    
}