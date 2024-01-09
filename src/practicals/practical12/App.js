// install axios using below command
// npm install axios

// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  const accessKey = 'YOUR_UNSPLASH_ACCESS_KEY';

  useEffect(() => {
    if (query.trim() !== '') {
      const fetchImages = async () => {
        try {
          const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query, client_id: accessKey },
          });

          setImages(response.data.results);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };

      fetchImages();
    }
  }, [query]);

  return (
    <div className="app">
      <h1>Image Search App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter search query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="image-container">
        {images.map((image) => (
          <img key={image.id} src={image.urls.small} alt={image.alt_description} />
        ))}
      </div>
    </div>
  );
};

export default App;
