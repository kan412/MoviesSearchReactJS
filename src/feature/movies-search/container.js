import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieCard from '../../shared/movie-card';
import config from '../../../config';
import { searchBY, sortBY } from '../../core/store/actions';
import { SEARCH_BY, SORT_BY } from '../../shared';
import styles from './component.css';

class MoviesSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchTerm: '',
    };
  }

  componentDidUpdate() {
    const { searchTerm } = this.state;
    const { sortBy, searchBy } = this.props;
    let queryString = '';

    if (searchBy === SEARCH_BY.GENRE) {
      queryString = `${config.API_URL}?sortBy=${sortBy}&sortOrder=desc&searchBy=${searchBy}&filter=${searchTerm}`;
    } else {
      queryString = `${config.API_URL}?sortBy=${sortBy}&sortOrder=desc&search=${searchTerm}&searchBy=${searchBy}`;
    }

    fetch(queryString)
      .then(res => res.json())
      .then(data => this.setState({ movies: data.data }));
  }

  handleClick = () => {
    const inputValue = document.getElementById('search-movies').value;
    this.setState({ searchTerm: inputValue });
  }

  handleSort = (e) => {
    const { sortToggle } = this.props;
    sortToggle(e.target.value);
  }

  handleFilter = (e) => {
    const { filterToggle } = this.props;
    filterToggle(e.target.value);
  }

  handleMovieClick = (movie) => {
    const url = `/film/`;
    return <Redirect to={url} />;
  }

  moviesList = movies => movies.map(
    movie => <MovieCard key={movie.id} data={movie} onMovieClick={this.handleMovieClick} />,
  );

  render() {
    const { movies } = this.state;
    const { sortBy, searchBy } = this.props;
    const mList = this.moviesList(movies);

    return (
      <React.Fragment>
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

        <div className={styles['search-results-header']}>
          <div className={styles['search-results-header-inner']}>
            <div className={styles['search-results-found']}>
              { mList.length }
              <span> movies found</span>
            </div>
            <div className={styles['search-results-sort']}>
              Sort by
              <span className={styles['split-buttons']}>
                <button type="button" onClick={this.handleSort} value={SORT_BY.YEAR} className={(sortBy === SORT_BY.YEAR) ? styles.active : ''}>Release Date</button>
                <button type="button" onClick={this.handleSort} value={SORT_BY.RATING} className={(sortBy === SORT_BY.RATING) ? styles.active : ''}>Rating</button>
              </span>
            </div>
          </div>
        </div>

        <div className={styles['search-results-container']}>
          { (mList.length > 0) ? mList : <h3 className={styles['notfound-title']}>No films Found</h3> }
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  searchBy: state.searchBy,
  sortBy: state.sortBy,
});

const mapDispatchToProps = dispatch => ({
  updSearchTerm: (value) => {
    dispatch(updateSearchTerm(value));
  },
  sortToggle: (value) => {
    dispatch(sortBY(value));
  },
  filterToggle: (value) => {
    dispatch(searchBY(value));
  },
});

MoviesSearchContainer.propTypes = {
  sortToggle: PropTypes.func.isRequired,
  filterToggle: PropTypes.func.isRequired,
  searchBy: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(MoviesSearchContainer);
