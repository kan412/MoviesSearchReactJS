import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieCard from '../../shared/movie-card';
import { getYear } from '../../shared';
import styles from './component.css';

const MovieDetailsComponent = ({ movies, match }) => {
  const currentPageData = movies.find(movie => movie.id === parseInt(match.params.id, 10));

  const relatedMovies = movies.filter(
    movie => movie.genres[0] === currentPageData.genres[0] && movie.id !== currentPageData.id,
  );
  const movList = relatedMovies.map(movie => <MovieCard key={movie.id} data={movie} />);


  return (
    <React.Fragment>
      <div className={styles['movie-summary']}>
        <div className={styles.image}>
          <img src={currentPageData.poster_path} width="250px" alt={currentPageData.title} />
        </div>

        <div className={styles.details}>
          <h1 className={styles.title}>
            {currentPageData.title}
            <span className={styles.rating}>{currentPageData.vote_average}</span>
          </h1>
          <div className={styles.meta}>
            <span className={styles['release-year']}>
              <span>{getYear(currentPageData.release_date)}</span>
              Year
            </span>
            <span className={styles.duration}>
              <span>{currentPageData.runtime}</span>
               Mins
            </span>
          </div>

          <div className={styles.description}>
            {currentPageData.overview}
          </div>
        </div>
      </div>

      <div className={styles['search-results-header']}>
        <div className={styles['search-results-header-inner']}>
          <span>Films by  </span>
          { currentPageData.genres.join(', ') }
          <span>  genre </span>
        </div>
      </div>

      <div className={styles['search-results-container']}>
        { (movList.length > 0) ? movList : 'No Items Found' }
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  movies: state.movies,
});


MovieDetailsComponent.propTypes = {
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(MovieDetailsComponent);
