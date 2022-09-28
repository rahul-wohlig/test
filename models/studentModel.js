const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
  },
  className: {
    type: Number,
    required: [true, 'Please provide className'],
  },
  registerNo: {
    type: Number,
    required: [true, 'Please provide registerNo'],
  },
  rollNo: {
    type: String,
    required: [true, 'Please provide email address'],
  },
  division: {
    type: String,
    required: [true, 'Please provide division number'],
  },
});

module.exports = mongoose.model('Student', studentSchema);
