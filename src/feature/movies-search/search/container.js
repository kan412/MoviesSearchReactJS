import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './component.css';
import { SEARCH_BY } from '../../../shared';
import { searchBY, updSearchTerm } from '../../../core/store/actions';


export class SearchContainer extends React.Component {
  static propTypes = {
    filterToggle: PropTypes.func.isRequired,
    updateSearchTerm: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      searchBy: SEARCH_BY.TITLE,
    };
  }

  handleClick = () => {
    const inputValue = document.getElementById('search-movies').value;
    const { filterToggle, updateSearchTerm } = this.props;
    const { searchBy } = this.state;
    filterToggle(searchBy);
    updateSearchTerm(inputValue);
  };

  handleFilter = (e) => {
    this.setState({ searchBy: e.target.value });
  };

  render() {
    const { searchBy } = this.state;
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

export const mapDispatchToProps = dispatch => ({
  updateSearchTerm: (value) => {
    dispatch(updSearchTerm(value));
  },
  filterToggle: (value) => {
    dispatch(searchBY(value));
  },
});

export default connect(null, mapDispatchToProps)(SearchContainer);
