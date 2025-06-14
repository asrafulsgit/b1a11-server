const express = require('express');
const { createBooking, myBookings, cencelBooking } = require('../controllers/myBooking.controllers');
const myBookingRouter = express.Router();



myBookingRouter.post('/create/booking', createBooking)
myBookingRouter.get('/my-bookings', myBookings)
myBookingRouter.delete('/my-booking/:id', cencelBooking)


module.exports = myBookingRouter;