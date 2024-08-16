// models/Persona.js
const mongoose = require('mongoose');

const personaSchema = new mongoose.Schema({
  name: String,
  ageRange: String,
  interests: [String],
  behavior: String,
  description: String,
});

module.exports = mongoose.model('Persona', personaSchema);
