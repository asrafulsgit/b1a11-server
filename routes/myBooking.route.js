const express = require('express');
const { createBooking, myBookings, cencelBooking, myBookingsIds } = require('../controllers/myBooking.controllers');
const userAuthentication = require('../middlewares/userAuth-middleware');
const myBookingRouter = express.Router();



myBookingRouter.post('/create/booking/:id',userAuthentication, createBooking)
myBookingRouter.get('/my-bookings',userAuthentication, myBookings)
myBookingRouter.delete('/my-booking/:id',userAuthentication, cencelBooking)
myBookingRouter.get('/my-booking-ids',userAuthentication, myBookingsIds)


module.exports = myBookingRouter;