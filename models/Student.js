const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rollNo: {
    type: Number,
    required: true,
    unique: true
  },
  course: {
    type: String,
    required: true
  },
  batch: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
