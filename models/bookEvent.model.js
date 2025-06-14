const mongoose = require('mongoose');

const BookEventsSchema = new mongoose.Schema({
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
  }
}, {
  timestamps: true
});

BookEventsSchema.index({ userEmail: 1, event: 1 }, { unique: true });

const BookEvent = mongoose.model('MyBooking', BookEventsSchema);
module.exports = BookEvent ;