// MainContent.js
import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const MainContent = () => {
  const { theme } = useContext(AppContext);

  return (
    <main className={`main-content ${theme}`}>
      <p>This is the main content area.</p>
    </main>
  );
};

export default MainContent;
