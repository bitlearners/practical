// AppContext.js
import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue = {
    theme,
    toggleTheme,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
