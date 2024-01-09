// SearchFilter.jsx

import React, { useState } from 'react';
import './Style.css'; // Import the CSS file

const SearchFilter = () => {
  // Sample list of items
  const itemList = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Another Item',
    'More Items',
    'React Search',
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(itemList);

  const handleSearch = (query) => {
    const filtered = itemList.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
    setSearchQuery(query);
  };

  return (
    <div className="search-filter-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className="search-input"
      />
      <ul className="item-list">
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
