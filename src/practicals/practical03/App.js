// app.js

import React from 'react';
import './Style.css'; // Import the CSS file

const App = () => {
  const itemList = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'];

  return (
    <div className="container"> {/* Apply container class */}
      <h1>React List Display</h1>
      <h2>List of Items</h2>
      <ul>
        {itemList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
