// LoginForm.js
import React, { useState } from 'react';
import './Style.css'; // Import the CSS file

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Simple validation for demo purposes
    if (username === 'Yash' && password === 'password') {
      setLoggedIn(true);
      setError('');
    } else {
      setLoggedIn(false);
      setError('Incorrect username or password');
    }
  };

  return (
    <div className="login-form">
      {isLoggedIn ? (
        <div className="welcome-message">Welcome, {username}!</div>
      ) : (
        <div>
          <h2>Login Form</h2>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button onClick={handleLogin}>Login</button>
          {error && <div className="error-message">{error}</div>}
        </div>
      )}
    </div>
  );
};

export default LoginForm;
