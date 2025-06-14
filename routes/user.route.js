const express = require('express'); 

const userRouter = express.Router();


userRouter.post('/user/register','')
userRouter.get('/user/login','')
userRouter.post('/google/login','')

 


module.exports = userRouter;