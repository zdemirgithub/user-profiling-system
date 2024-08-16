// server.js
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const Persona = require('./models/Persona');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/user_profiling', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User data collection endpoint
app.post('/collect-data', async (req, res) => {
  const { name, age, interests, behavior } = req.body;
  const user = new User({ name, age, interests, behavior });
  await user.save();
  res.status(201).send('User data collected');
});

// Generate persona endpoint
app.post('/generate-persona', async (req, res) => {
  const users = await User.find();
  const persona = createPersona(users); // Custom function for persona generation
  const savedPersona = new Persona(persona);
  await savedPersona.save();
  res.status(201).send('Persona generated');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
