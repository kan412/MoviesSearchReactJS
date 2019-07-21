import React from 'react';
import PropTypes from 'prop-types';
import Sort from '../sort';
import styles from './component.css';

const SearchResultsHeaderComponent = ({ searchResults }) => (
  <div className={styles['search-results-header']}>
    <div className={styles['search-results-header-inner']}>
      <div className={styles['search-results-found']}>
        { searchResults }
        <span> movies found</span>
      </div>
      <Sort />
    </div>
  </div>
);

SearchResultsHeaderComponent.propTypes = {
  searchResults: PropTypes.number.isRequired,
};

export default SearchResultsHeaderComponent;
