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
  }
}, {
  timestamps: true
});

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile ;