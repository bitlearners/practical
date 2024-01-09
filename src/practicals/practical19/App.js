// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [city, setCity] = useState(''); // State to store the city name
  const [currentWeather, setCurrentWeather] = useState(null); // State to store current weather data

  // Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual API key
  const apiKey = 'USE_YOUR_API';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
        );
        // Extracting the first item from the list array for current weather
        const currentWeatherData = response.data.list[0];
        setCurrentWeather(currentWeatherData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    if (city) {
      fetchData(); // Make API call when city changes
    }
  }, [city, apiKey]);

  return (
    <div className="weather-container">
      <h1>Current Weather</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      {currentWeather && (
        <div className="current-weather">
          <h2>{currentWeather.dt_txt}</h2>
          <p>Temperature: {currentWeather.main.temp} &#8451;</p>
          <p>Weather: {currentWeather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
