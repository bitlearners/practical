// App.js
import React, { useState } from 'react';
import './Style.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '<-') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="result">{result}</div>
        <div className="input">{input}</div>
      </div>
      <div className="buttons">
        <button className="button-clear" onClick={() => handleButtonClick('C')}>C</button>
        <button className="button-backspace" onClick={() => handleButtonClick('<-')}>←</button>
        <button className="button-percent" onClick={() => handleButtonClick('%')}>%</button>
        <button className="button-divide" onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button className="button-multiply" onClick={() => handleButtonClick('*')}>×</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button className="button-subtract" onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button className="button-add" onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button className="button-equal" onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
