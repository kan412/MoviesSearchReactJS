import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../../shared/movie-card';
import getYear from '../../shared/utils';
import config from '../../../config';
import styles from './component.css';

class MovieDetailsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      genres: [],
      relatedMovies: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const queryString = `${config.API_URL}/${match.params.id}`;

    fetch(queryString)
      .then(res => res.json())
      .then((mov) => {
        this.setState({ movie: mov });
        this.setState({ genres: mov.genres });
      });

    const { genres } = this.state;
    const relatedMoviesQueryString = `${config.API_URL}?searchBy=genres&filter=${genres.join(',')}`;

    fetch(relatedMoviesQueryString)
      .then(res => res.json())
      .then(movies => this.setState({ relatedMovies: movies.data }));
  }

  render() {
    const { movie, relatedMovies } = this.state;
    const mlist = relatedMovies.map(mov => <MovieCard key={mov.id} data={mov} />);

    return (
      <React.Fragment>
        <div className={styles['movie-summary']}>
          <div className={styles.image}>
            <img src={movie.poster_path} width="250px" alt={movie.title} />
          </div>

          <div className={styles.details}>
            <h1 className={styles.title}>
              {movie.title}
              <span className={styles.rating}>{movie.vote_average}</span>
            </h1>
            <div className={styles.meta}>
              <span className={styles['release-year']}>
                <span>{getYear(movie.release_date)}</span>
                Year
              </span>
              <span className={styles.duration}>
                <span>{movie.runtime}</span>
                 Mins
              </span>
            </div>

            <div className={styles.description}>
              {movie.overview}
            </div>
          </div>
        </div>

        <div className={styles['search-results-header']}>
          <div className={styles['search-results-header-inner']}>
            <span>Films by  </span>
            { movie.genres }
            <span>  genre </span>
          </div>
        </div>

        <div className={styles['search-results-container']}>
          { (mlist.length > 0) ? mlist : 'No Items Found' }
        </div>
      </React.Fragment>
    );
  }

}


MovieDetailsContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default MovieDetailsContainer;
