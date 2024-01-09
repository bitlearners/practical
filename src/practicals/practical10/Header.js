// Header.js
import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <header className={`header ${theme}`}>
      <div className="header-content">
        <h1>Context API Example</h1>
      </div>
    </header>
  );
};

export default Header;
