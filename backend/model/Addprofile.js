const mongoose = require('mongoose');

const addProfileSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  expertise: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UpcomingEvent',
  },
  coordinator: {
    name: {
      type: String,
    },
    department: {
      type: String,
    },
    email: {
      type: String,
    },
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('AddProfile', addProfileSchema);
