import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './component.css';
import { SEARCH_BY } from '../../../shared';
import { searchBY, updSearchTerm } from '../../../core/store/actions';


class SearchComponent extends React.Component {

  static propTypes = {
    searchBy: PropTypes.string.isRequired,
  }

  handleClick = () => {
    const inputValue = document.getElementById('search-movies').value;
    const { updateSearchTerm } = this.props;
    updateSearchTerm(inputValue);
  };

  
  handleFilter = (e) => {
    const { filterToggle } = this.props;
    filterToggle(e.target.value);
  };
 
  render() {
    console.log(this.props);
    const { searchBy } = this.props;
    return (
      <div className={styles['search-form']}>
        <label htmlFor="search-movies">
          <span>FIND YOUR MOVIE</span>
          <input type="text" id="search-movies" />
          <button type="button" onClick={this.handleClick} id={styles['search-button']}>Search</button>
        </label>
        <div className={styles['search-filter']}>
          Search by
          <span className={styles['split-buttons']}>
            <button type="button" onClick={this.handleFilter} value={SEARCH_BY.TITLE} className={(searchBy === SEARCH_BY.TITLE) ? styles.active : ''}>Title</button>
            <button type="button" onClick={this.handleFilter} value={SEARCH_BY.GENRE} className={(searchBy === SEARCH_BY.GENRE) ? styles.active : ''}>Genre</button>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchBy: state.searchBy,
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: (value) => {
    dispatch(updSearchTerm(value));
  },
  filterToggle: (value) => {
    dispatch(searchBY(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
