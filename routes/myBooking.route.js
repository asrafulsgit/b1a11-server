const express = require('express');
const myBookingRouter = express.Router();



myBookingRouter.post('/create/booking','')
myBookingRouter.get('/my-bookings','')
myBookingRouter.delete('/my-booking/:id','')


module.exports = myBookingRouter;