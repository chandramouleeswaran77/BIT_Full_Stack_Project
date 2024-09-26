const mongoose = require('mongoose');

const addNewEventSchema = mongoose.Schema({
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
  upcomingEventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UpcomingEvent',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('AddNewEvent', addNewEventSchema);
