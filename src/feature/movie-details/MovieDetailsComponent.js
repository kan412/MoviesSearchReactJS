import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../../shared/movie-card';
import { moviesList } from '../../shared/constants';
import styles from './MovieDetails.css';

const movieDetails = ({ match }) => {
  const currentPageData = moviesList.find(movie => movie.id === parseInt(match.params.id, 10));
  const relatedMovies = moviesList.filter(
    movie => movie.genre === currentPageData.genre && movie.id !== currentPageData.id,
  );
  const movList = relatedMovies.map(movie => <MovieCard key={movie.id} data={movie} />);
  return (
    <React.Fragment>
      <div className={styles['movie-summary']}>
        <div className={styles.image}>
          <img src={currentPageData.thumbnail} alt={currentPageData.title} />
        </div>

        <div className={styles.details}>
          <h1 className={styles.title}>
            {currentPageData.title}
            <span className={styles.rating}>{currentPageData.rating}</span>
          </h1>
          <div className={styles.meta}>
            <span className={styles['release-year']}>
              <span>{currentPageData.year}</span>
              Year
            </span>
            <span className={styles.duration}>
              <span>{currentPageData.duration}</span>
               Mins
            </span>
          </div>

          <div className={styles.description}>
            {currentPageData.description}
          </div>
        </div>
      </div>

      <div className={styles['search-results-header']}>
        <div className={styles['search-results-header-inner']}>
          <span>Films by  </span>
          { currentPageData.genre }
          <span>  genre </span>
        </div>
      </div>

      <div className={styles['search-results-container']}>
        { (movList.length > 0) ? movList : 'No Items Found' }
      </div>
    </React.Fragment>
  );
};

movieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default movieDetails;
