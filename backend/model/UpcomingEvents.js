const mongoose = require('mongoose');

const upcomingEventsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
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

module.exports = mongoose.model('UpcomingEvent', upcomingEventsSchema);
