import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import MovieCard from '../../shared/movie-card';
import SearchResults from './search-results';
import SearchResultsHeader from './search-results-header';
import config from '../../../config';
import MovieSummary from './movie-summary';

class MovieDetailsContainer extends React.Component {
  isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      relatedMovies: [],
    };
  }

  async componentDidMount() {
    this.isMounted = true;

    const { match } = this.props;
    const queryString = `${config.API_URL}/${match.params.id}`;

    const movieRes = await fetch(queryString);
    const movie = await movieRes.json();

    const relatedMoviesQueryString = `${config.API_URL}?searchBy=genres&filter=${encodeURIComponent(movie.genres.join(','))}`;

    const relatedRes = await fetch(relatedMoviesQueryString);
    const { data } = await relatedRes.json();
    if (this.isMounted) {
      this.setState({ movie, relatedMovies: data });
    }
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  handleMovieClick = async (movie) => {
    const { history } = this.props;
    history.push(`/film/${movie.id}`);

    const relatedMoviesQueryString = `${config.API_URL}?searchBy=genres&filter=${encodeURIComponent(movie.genres.join(','))}`;

    const relatedRes = await fetch(relatedMoviesQueryString);
    const { data } = await relatedRes.json();
    const rmovies = data.filter(mov => mov.id !== movie.id);
    this.setState({ movie, relatedMovies: rmovies });
  }

  render() {
    const { movie, relatedMovies } = this.state;
    const mlist = relatedMovies.map(
      mov => <MovieCard key={mov.id} data={mov} onMovieClick={this.handleMovieClick} />,
    );

    return (
      <React.Fragment>
        <MovieSummary data={movie} />
        <SearchResultsHeader genres={movie.genres} />
        <SearchResults data={mlist} />
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
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default withRouter(MovieDetailsContainer);
