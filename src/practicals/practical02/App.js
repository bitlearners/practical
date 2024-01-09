// Counter.jsx

import React, { useState } from 'react';
import './Style.css'; // Import the CSS file

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <div className="button-container">
        <button onClick={increment} className="increment-btn">
          Increment
        </button>
        <button onClick={decrement} className="decrement-btn">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
