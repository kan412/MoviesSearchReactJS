import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import MovieCard from '../../shared/movie-card';
import config from '../../../config';
import { searchBY, sortBY } from '../../core/store/actions';
import { SEARCH_BY, SORT_BY } from '../../shared';
import styles from './component.css';
import Search from './search';

class MoviesSearchContainer extends React.Component {
  static propTypes = {
    sortToggle: PropTypes.func.isRequired,
    searchBy: PropTypes.string.isRequired,
    sortBy: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      firstLoad: true,
    };
  }


  componentDidUpdate(prevProps, prevState) {
    const { firstLoad } = this.state;
    const { sortBy, searchBy, searchTerm } = this.props;

    if (!firstLoad
       && (prevProps.sortBy === sortBy
         && prevProps.searchBy === searchBy
          && prevState.searchTerm === searchTerm)
    ) {
      return;
    }

    let queryString = '';

    if (searchBy === SEARCH_BY.GENRE) {
      queryString = `${config.API_URL}?sortBy=${sortBy}&searchBy=${searchBy}&filter=${searchTerm}`;
    } else {
      queryString = `${config.API_URL}?sortBy=${sortBy}&search=${searchTerm}&searchBy=${searchBy}`;
    }

    fetch(queryString)
      .then(res => res.json())
      .then(data => this.setState({ movies: data.data, firstLoad: false }));

      console.log(queryString);
  }

  handleSort = (e) => {
    const { sortToggle } = this.props;
    sortToggle(e.target.value);
  }


  handleMovieClick = (movie) => {
    const { history } = this.props;
    history.push(`/film/${movie.id}`);
  }

  moviesList = movies => movies.map(
    movie => <MovieCard key={movie.id} data={movie} onMovieClick={this.handleMovieClick} />,
  );

  render() {
    const { movies } = this.state;
    const { sortBy } = this.props;
    const mList = this.moviesList(movies);

    return (
      <React.Fragment>
        <Search />

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
  sortBy: state.sortBy,
  searchBy: state.searchBy,
  searchTerm: state.searchTerm,
});

const mapDispatchToProps = dispatch => ({
  sortToggle: (value) => {
    dispatch(sortBY(value));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviesSearchContainer));
