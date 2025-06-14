const express = require('express'); 
const { userRegister, userLogin, googleLogin, userLogout } = require('../controllers/user.controllers');

const userRouter = express.Router();


userRouter.post('/user/register', userRegister)
userRouter.get('/user/login', userLogin)
userRouter.post('/google/login', googleLogin)
userRouter.get('/user/logout', userLogout)

 


module.exports = userRouter;