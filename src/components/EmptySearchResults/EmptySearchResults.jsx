import React from 'react';
import './empty-search-results.css';

const EmptySearchResults = ({ searchText }) => {
  return (
    <p className='empty-search'>
      Theres no results for <span className='search-text'>"{searchText}"</span>
    </p>
  );
};

export { EmptySearchResults };
