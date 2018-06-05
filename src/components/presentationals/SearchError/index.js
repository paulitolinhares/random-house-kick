import React from 'react';
import './style.css';

const SearchError = () => {
  return (
    <div className="SearchError notification is-danger">
      <p>
        There was an error fetching the categories.
        Check your internet connection and
        <button onClick={() => window.location.reload()}>click here</button> to reload the page
      </p>
    </div>
  );
};

export default SearchError;
