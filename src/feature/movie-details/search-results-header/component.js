import React from 'react';
import PropTypes from 'prop-types';
import styles from './component.css';

const SearchResultsHeaderComponent = ({ genres }) => (
  <div className={styles['search-results-header']}>
    <div className={styles['search-results-header-inner']}>
      <span>Films by  </span>
      {genres}
      <span>  genre </span>
    </div>
  </div>
);

SearchResultsHeaderComponent.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
};


SearchResultsHeaderComponent.defaultProps = {
  genres: null,
};

export default SearchResultsHeaderComponent;
