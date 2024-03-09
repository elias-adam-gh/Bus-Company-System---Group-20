const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define schema
const contactSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;