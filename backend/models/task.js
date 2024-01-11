const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
  name: {
    type: String,
  },
  Description: {
    type: String,
  },
});

const Task  = mongoose.model('Task', Schema);
module.exports = Task;
