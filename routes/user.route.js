const express = require('express'); 
const { userRegister, userLogin, googleLogin } = require('../controllers/user.controllers');

const userRouter = express.Router();


userRouter.post('/user/register', userRegister)
userRouter.get('/user/login', userLogin)
userRouter.post('/google/login', googleLogin)

 


module.exports = userRouter;