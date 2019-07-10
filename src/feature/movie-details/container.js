import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import MovieCard from '../../shared/movie-card';
import getYear from '../../shared/utils';
import config from '../../../config';
import styles from './component.css';

class MovieDetailsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      relatedMovies: [],
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    console.log(match.params.id);
    const queryString = `${config.API_URL}/${match.params.id}`;

    const moviewRes = await fetch(queryString);
    const movie = await moviewRes.json();

    const relatedMoviesQueryString = `${config.API_URL}?searchBy=genres&filter=${movie.genres.join(',')}`;

    const relatedRes = await fetch(relatedMoviesQueryString);
    const { data } = await relatedRes.json();
    this.setState({ movie, relatedMovies: data });
  }

  handleMovieClick = (movie) => {
    const url = `/film/`;
    return <Redirect to={url} />;
  };

  render() {
    console.log(typeof this.handleMovieClick);
    const { movie, relatedMovies } = this.state;
    const mlist = relatedMovies.map(mov => <MovieCard key={mov.id} data={mov} onMovieClick={this.handleMovieClick} />);

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
            {movie.genres}
            <span>  genre </span>
          </div>
        </div>

        <div className={styles['search-results-container']}>
          {(mlist.length > 0) ? mlist : 'No Items Found'}
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
