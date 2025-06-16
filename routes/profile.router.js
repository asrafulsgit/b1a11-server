const express = require('express');
const userAuthentication = require('../middlewares/userAuth-middleware');
const { profile, updateProfile } = require('../controllers/profile.controllers');
const profileRouter = express.Router();



profileRouter.get('/profile',userAuthentication,profile )
profileRouter.post('/update-profile',userAuthentication, updateProfile )


module.exports = profileRouter;