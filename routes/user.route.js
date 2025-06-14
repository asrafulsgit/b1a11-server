const express = require('express'); 
const { userRegister, userLogin, googleLogin, userLogout, userObserver } = require('../controllers/user.controllers');

const userRouter = express.Router();


userRouter.post('/user/register', userRegister)
userRouter.get('/user/login', userLogin)
userRouter.post('/google/login', googleLogin)
userRouter.get('/user/logout', userLogout)
userRouter.get('/user/observer', userObserver)

 


module.exports = userRouter;