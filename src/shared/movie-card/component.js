import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getYear } from '..';
import styles from './component.css';

const MovieCardComponent = ({ data }) => (
  <div className={styles.movie}>
    <Link to={`/film/${data.id}`}>
      <img src={data.poster_path} width="250px" height="400px" alt={data.title} className="movie-thumbnail" />
    </Link>
    <div className={styles['movie-header']}>
      <span className={styles['movie-name']}>{data.title}</span>
      <span className={styles['movie-release-date']}>{getYear(data.release_date)}</span>
      <span className={styles['movie-genre']}>{data.genres[0]}</span>
    </div>
  </div>
);

export default MovieCardComponent;

MovieCardComponent.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    year: PropTypes.number,
    genre: PropTypes.string,
  }).isRequired,
};
