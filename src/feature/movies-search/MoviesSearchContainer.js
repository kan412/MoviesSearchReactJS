import React from 'react';
import MovieCard from '../../shared/movie-card';
import { moviesList, SEARCH_BY, SORT_BY } from '../../shared';
import { getMovies, getSortedMovies } from './utils';
import styles from './MoviesSearch.css';

class MoviesSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: moviesList,
      searchBy: SEARCH_BY.TITLE,
      sortBy: SORT_BY.YEAR,
    };
  }

  handleClick = () => {
    const inputValue = document.getElementById('search-movies').value;
    const { searchBy } = this.state;
    this.setState({ movies: getMovies(searchBy, moviesList, inputValue) });
  }

  handleSort = (e) => {
    this.setState({ sortBy: e.target.value });
  }

  handleFilter = (e) => {
    this.setState({ searchBy: e.target.value });
  }

  render() {
    const { movies, sortBy, searchBy } = this.state;
    const sortedMoviesList = getSortedMovies(sortBy, movies);
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
          { (mList.length > 0) ? mList : 'No Items Found' }
        </div>
      </React.Fragment>
    );
  }
}

export default MoviesSearch;
