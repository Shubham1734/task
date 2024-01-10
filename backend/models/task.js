const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  name: { type: String },
  Description: String,

});

const Model = mongoose.model('Data', Schema);

module.exports = Model;
