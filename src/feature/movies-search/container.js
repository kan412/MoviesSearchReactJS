import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from '../../shared/movie-card';
import {
  searchBY, sortBY, fetchMovies, updateSearchTerm,
} from '../../core/store/actions';
import { SEARCH_BY, SORT_BY } from '../../shared';
import { getMovies, getSortedMovies } from './utils';
import styles from './component.css';

class MoviesSearchContainer extends React.Component {
  componentWillMount() {
    const { fetchMovs } = this.props;
    fetchMovs();
  }

  handleClick = () => {
    const inputValue = document.getElementById('search-movies').value;
    const { updSearchTerm } = this.props;
    updSearchTerm(inputValue);
  }

  handleSort = (e) => {
    const { sortToggle } = this.props;
    sortToggle(e.target.value);
  }

  handleFilter = (e) => {
    const { filterToggle } = this.props;
    filterToggle(e.target.value);
  }

  render() {
    const {
      movies, sortBy, searchBy, searchTerm,
    } = this.props;
    let searchMovies = [];
    if (searchTerm !== '') {
      searchMovies = getMovies(searchBy, movies, searchTerm);
    }
    const sortedMoviesList = getSortedMovies(sortBy, searchMovies);
    const mList = sortedMoviesList.map(movie => <MovieCard key={movie.id} data={movie} />);

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
  movies: state.movies,
  searchTerm: state.searchTerm,
  searchBy: state.searchBy,
  sortBy: state.sortBy,
});

const mapDispatchToProps = dispatch => ({
  updSearchTerm: (value) => {
    dispatch(updateSearchTerm(value));
  },
  fetchMovs: () => {
    dispatch(fetchMovies());
  },
  sortToggle: (value) => {  
    dispatch(sortBY(value));
  },
  filterToggle: (value) => {
    dispatch(searchBY(value));
  },
});

MoviesSearchContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    budget: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    revenue: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    tagline: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
  })).isRequired,
  searchTerm: PropTypes.string.isRequired,
  updSearchTerm: PropTypes.func.isRequired,
  fetchMovs: PropTypes.func.isRequired,
  sortToggle: PropTypes.func.isRequired,
  filterToggle: PropTypes.func.isRequired,
  searchBy: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(MoviesSearchContainer);
