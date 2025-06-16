const mongoose = require('mongoose');

const eventReviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
      required: true,
    },
    comment: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    date: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

eventReviewSchema.index({ user: 1, event: 1 }, { unique: true });

const Review = mongoose.model('Review', eventReviewSchema);
module.exports = Review;
