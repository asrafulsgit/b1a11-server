const mongoose = require('mongoose');

const myBookingSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: [true, 'Email is required!'],
    trim: true,
    lowercase: true
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  phone :{
    type : String,
    trim: true,
  }
}, {
  timestamps: true
});

myBookingSchema.index({ userEmail: 1, event: 1 }, { unique: true });

const MyBooking = mongoose.model('MyBooking', myBookingSchema);
module.exports = MyBooking ;