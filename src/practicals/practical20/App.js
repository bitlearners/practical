// App.js
import React, { useState } from 'react';
import './Style.css';

const generatePassword = (length) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

const App = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(passwordLength);
    setGeneratedPassword(newPassword);
  };

  return (
    <div className="password-generator">
      <h1>Password Generator</h1>
      <div className="controls">
        <label>Password Length:</label>
        <input
          type="number"
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
        <button onClick={handleGeneratePassword}>Generate Password</button>
      </div>
      <div className="result">
        <p>Your Strong Password:</p>
        <textarea value={generatedPassword} readOnly />
      </div>
    </div>
  );
};

export default App;
