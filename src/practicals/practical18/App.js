// App.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import Card from './Card';
import Container from './Container';
import './Style.css'; // Import the CSS file

function App() {
  const handleButtonClick = () => {
    alert('Button Clicked!');
  };

  return (
    <div className="App">
      <Container>
        <Card title="Card 1" imageSrc="https://images.unsplash.com/photo-1682685796186-1bb4a5655653?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card title="Card 2" imageSrc="https://images.unsplash.com/photo-1682685796186-1bb4a5655653?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card title="Card 3" imageSrc="https://images.unsplash.com/photo-1682685796186-1bb4a5655653?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        <Button onClick={handleButtonClick}>
          <FontAwesomeIcon icon={faCoffee} className="custom-icon" />
          Click me
        </Button>
      </Container>
    </div>
  );
}

export default App;
