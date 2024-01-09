// App.js
import React from 'react';
import { AppProvider } from './AppContext';
import Header from './Header';
import MainContent from './MainContent';
import ToggleButton from './ToggleButton';
import './Style.css';

const App = () => {
  return (
    <AppProvider>
      <ToggleButton />
      <div className="app">
        <Header />
        <MainContent />
      </div>
    </AppProvider>
  );
};

export default App;
