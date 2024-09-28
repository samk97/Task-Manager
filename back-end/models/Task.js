const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['TODO', 'IN PROGRESS', 'DONE'], // Limits the status to the three categories
    default: 'TODO',
  },
});

module.exports = mongoose.model('Task', taskSchema);
