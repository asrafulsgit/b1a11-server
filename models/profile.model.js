const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  experties: {
    type: [String],
    default: []
  },
  bio: {
    type: String,
    trim: true
  },
  phone: {
    type: String
  },
  location: {
    type: String
  },
  dob: {
    type: Date
  },
  stats: {
    eventsPaticipated: {
      type: Number,
      default: 0,
      min: 0
    },
    eventsOrganized: {
      type: Number,
      default: 0,
      min: 0
    },
    totalParticipants: {
      type: Number,
      default: 0,
      min: 0
    },
    avgRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    }
  }
}, {
  timestamps: true
});

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile ;