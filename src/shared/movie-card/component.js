import React from 'react';
import PropTypes from 'prop-types';
import getYear from '../utils';
import styles from './component.css';

const MovieCardComponent = ({ data, onMovieClick }) => (

  <div className={styles.movie}>
    <button type="button" onClick={() => onMovieClick(data)}>
      <img src={data.poster_path} width="250px" height="400px" alt={data.title} className="movie-thumbnail" />
    </button>

    <div className={styles['movie-header']}>
      <span className={styles['movie-name']}>{data.title}</span>
      <span className={styles['movie-release-date']}>{getYear(data.release_date)}</span>
      <span className={styles['movie-genre']}>{data.genres.join(', ')}</span>
    </div>
  </div>
);

export default MovieCardComponent;

MovieCardComponent.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
