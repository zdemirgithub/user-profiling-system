// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  interests: [String],
  behavior: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
