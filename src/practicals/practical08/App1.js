import React, { useState, useEffect } from 'react';
import './Style1.css';

const ApiDataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quotable.io/random');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts


  return (
    <div className="api-data-container">
      <h2>Random Quote from REST API</h2>
      {data ? (
        <div>
          <p>{data.content}</p>
          <p>{`- ${data.author}`}</p>
          <p>Tags: {data.tags.join(', ')}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ApiDataFetcher;
