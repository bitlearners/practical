// ToggleButton.js
import React, { useContext } from 'react';
import { AppContext } from './AppContext';
// import './ToggleButton.css';

const ToggleButton = () => {
  const { toggleTheme } = useContext(AppContext);

  return (
    <button className="toggle-button" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ToggleButton;
