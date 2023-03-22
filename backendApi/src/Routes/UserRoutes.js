import express from 'express';
import UserRegister from '../controllers/UserControllers'
import Userschema from '../Validation/userValidation';
let routes = express.Router();

routes.get('/')

// user registration
routes.post('/register-user', async (req, res) => {
    await UserRegister(req.body, User, res)
})


//Admin user registration route
routes.post('/Adminregister-user', async (req, res) => {
    await UserRegister(req.body, Admin, res)
})

//user login route
routes.post('/login-user', async(function (req, res) { }))

//Admin user login route

routes.post('/Adminlogin-user', async(function (req, res) { }))

