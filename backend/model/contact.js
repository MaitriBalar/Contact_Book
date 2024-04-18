const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Contact = new Schema({
  fname : String,
  lname : String,
  mobile : Number
});

module.exports = mongoose.model('contact', Contact);