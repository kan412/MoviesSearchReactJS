import React from 'react';
import PropTypes from 'prop-types';
import styles from './component.css';

const SearchResultsComponent = ({ data }) => (
  <div className={styles['search-results-container']}>
    { (data.length > 0) ? data : <h3 className={styles['notfound-title']}>No films Found</h3> }
  </div>
);

SearchResultsComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchResultsComponent;
