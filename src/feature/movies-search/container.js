import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import MovieCard from '../../shared/movie-card';
import config from '../../../config';
import { SEARCH_BY } from '../../shared';
import styles from './component.css';
import Search from './search';
import Sort from './sort';

class MoviesSearchContainer extends React.Component {
  static propTypes = {
    searchTerm: PropTypes.string.isRequired,
    searchBy: PropTypes.string.isRequired,
    sortBy: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    history: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      firstLoad: true,
    };
  }


  componentDidUpdate(prevProps) {
    const { firstLoad } = this.state;
    const { sortBy, searchBy, searchTerm } = this.props;

    if (!firstLoad
       && (prevProps.sortBy === sortBy
         && prevProps.searchBy === searchBy
          && prevProps.searchTerm === searchTerm)
    ) {
      return;
    }

    let queryString = '';

    if (searchBy === SEARCH_BY.GENRE) {
      queryString = `${config.API_URL}?sortBy=${sortBy}&sortOrder=desc&searchBy=${searchBy}&filter=${searchTerm}`;
    } else {
      queryString = `${config.API_URL}?sortBy=${sortBy}&sortOrder=desc&search=${searchTerm}&searchBy=${searchBy}`;
    }

    fetch(queryString)
      .then(res => res.json())
      .then(data => this.setState({ movies: data.data, firstLoad: false }));
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
            <Sort />
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

export default withRouter(connect(mapStateToProps)(MoviesSearchContainer));
