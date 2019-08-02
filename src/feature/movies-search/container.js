import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import MovieCard from '../../shared/movie-card';
import getMovies from './utils';
import Search from './search';
import SearchResultsHeader from './search-results-header';
import SearchResults from './search-results';

export class MoviesSearchContainer extends React.Component {
  static propTypes = {
    searchTerm: PropTypes.string.isRequired,
    searchBy: PropTypes.string.isRequired,
    sortBy: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    history: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      firstLoad: true,
    };
  }


  componentDidUpdate(prevProps) {
    const { firstLoad } = this.state;
    const { sortBy, searchBy, searchTerm } = this.props;

    if (!firstLoad
       && (prevProps.sortBy === sortBy
         && prevProps.searchBy === searchBy
          && prevProps.searchTerm === searchTerm)
    ) {
      return;
    }
    const url = getMovies(sortBy, searchBy, searchTerm);
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ movies: data.data, firstLoad: false }));
  }

  handleMovieClick = (movie) => {
    const { history } = this.props;
    history.push(`/film/${movie.id}`);
  }

  moviesList = movies => movies.map(
    movie => <MovieCard key={movie.id} data={movie} onMovieClick={this.handleMovieClick} />,
  );

  render() {
    const { movies } = this.state;
    const mList = this.moviesList(movies);

    return (
      <React.Fragment>
        <Search />
        <SearchResultsHeader searchResults={mList.length} />
        <SearchResults data={mList} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  sortBy: state.sortBy,
  searchBy: state.searchBy,
  searchTerm: state.searchTerm,
});

export default withRouter(connect(mapStateToProps)(MoviesSearchContainer));
