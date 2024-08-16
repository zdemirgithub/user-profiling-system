// src/App.js
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [interests, setInterests] = useState('');
  const [behavior, setBehavior] = useState('');
  const [message, setMessage] = useState('');

  const submitData = async () => {
    const response = await fetch('/collect-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, age, interests: interests.split(','), behavior }),
    });
    const result = await response.text();
    setMessage(result);
  };

  const generatePersona = async () => {
    const response = await fetch('/generate-persona', {
      method: 'POST',
    });
    const result = await response.text();
    setMessage(result);
  };

  return (
    <div>
      <h1>User Profiling System</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Interests (comma separated)"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />
        <input
          type="text"
          placeholder="Behavior"
          value={behavior}
          onChange={(e) => setBehavior(e.target.value)}
        />
        <button onClick={submitData}>Submit Data</button>
        <button onClick={generatePersona}>Generate Persona</button>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default App;
