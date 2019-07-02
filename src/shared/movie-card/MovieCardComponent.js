import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MovieCard.css';

const movieCard = ({ data }) => (
  <div className={styles.movie}>
    <Link to={`/movies/${data.id}`}>
      <img src={data.thumbnail} alt={data.title} className="movie-thumbnail" />
    </Link>
    <div className={styles['movie-header']}>
      <span className={styles['movie-name']}>{data.title}</span>
      <span className={styles['movie-release-date']}>{data.year}</span>
      <span className={styles['movie-genre']}>{data.genre}</span>
    </div>
  </div>
);

export default movieCard;

movieCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    year: PropTypes.number,
    genre: PropTypes.string,
  }).isRequired,
};
