import express from 'express';
import UserSchema from '../Model/userModel.js';

import user from '../Model/userModel.js'
import bcrypt from 'bcrypt'
import User from '../../database.js';
let salt = (10)

// console.log(UserSchema);
const UserRegister = async (req, res) => {
    try {
        const { Email, password, firstname, lastname, role, phoneNumber } = req.body;
        // validate  userName ..........
        let userNameTaken = await validateUsername(req.body.username);

        if (!userNameTaken) {
            return res.status(200).json({
                message: `Username is taken`,
                success: `false`
            })

        }
        // validate Email Address .......
        let emailNotTaken = await validateUsername(req.body.email);
        if (!emailNotTaken) {
            return res.status(200).json({
                message: `Email is already registered please try again`,
                success: `false`
            })
        }
        userDetail = {
            Email,
            Username,
            ROLE
        }
        //create a new user object
        const newUser = new user({
            userDetails,
            password: hashedpassword
        });
        // pass in the token in the new user object
        await newUser.save(userDetail)
        return res.status(201)
            .json({
                message: 'now you are succesffully registered please log in',
                success: true,
                newUser
            })
    }

    catch (error) {
        res.status(500).json({
            message: `unable to create account`,
            success: false
        });
    }
}

// get hashed password from bcrypt service

const hashedpassword = await bcrypt.hash(password, salt);

const validateUsername = async username => {
    // tenary operator
    user.findOne({ username: username });
    return user ? false : true;
}

const validateEmail = async username => {
    // tenary operator
    user.findOne({ email: email });
    return user ? false : true;
}

//create  userLogin function
const userLogin = async (req, res, role) => {
    const { email, password } = req.body;

    //first check if the email is in the database
    const UserEmail = user.findOne({ email })
    if (UserEmail == null) {
        return res.status(403).json({
            message: 'Email is not in the database',
            success: false
        })
    }


}
