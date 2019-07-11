import React from 'react';
import PropTypes from 'prop-types';
import getYear from '../../../shared/utils';
import styles from './component.css';

const MovieSummaryComponent = ({ data }) => (
  <div className={styles['movie-summary']}>
    <div className={styles.image}>
      <img src={data.poster_path} width="250px" alt={data.title} />
    </div>

    <div className={styles.details}>
      <h1 className={styles.title}>
        {data.title}
        <span className={styles.rating}>{data.vote_average}</span>
      </h1>
      <div className={styles.meta}>
        <span className={styles['release-year']}>
          <span>{getYear(data.release_date)}</span>
          Year
        </span>
        <span className={styles.duration}>
          <span>{data.runtime}</span>
          Mins
        </span>
      </div>

      <div className={styles.description}>
        {data.overview}
      </div>
    </div>
  </div>
);

MovieSummaryComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.PropTypes.object.isRequired,
};

export default MovieSummaryComponent;
