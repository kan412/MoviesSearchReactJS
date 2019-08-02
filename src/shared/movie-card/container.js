import React from 'react';
import PropTypes from 'prop-types';
import getYear from '../utils';
import styles from './component.css';

export class MovieCardContainer extends React.Component {
  handleClick = () => {
    const { data, onMovieClick } = this.props;
    onMovieClick(data);
  }

  render() {
    const { data } = this.props;
    return (
      <div className={styles.movie}>
        <button className={styles.button} type="button" onClick={this.handleClick}>
          <img src={data.poster_path} width="250px" height="400px" alt={data.title} className="movie-thumbnail" />
        </button>

        <div className={styles['movie-header']}>
          <span className={styles['movie-name']}>{data.title}</span>
          <span className={styles['movie-release-date']}>{getYear(data.release_date)}</span>
          <span className={styles['movie-genre']}>{data.genres.join(', ')}</span>
        </div>
      </div>
    );
  }
}

export default MovieCardContainer;

MovieCardContainer.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
