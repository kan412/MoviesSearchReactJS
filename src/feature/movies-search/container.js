import React from 'react';
import MovieCard from '../../shared/movie-card';

class MoviesSearch extends React.Component {
  constructor(props) {
    super(props);

    const { data } = this.props;

    this.state = {
      movies: data,
      searchBy: 'title',
      sortBy: 'year',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleClick() {
    const inputValue = document.getElementById('search-movies').value;
    const { searchBy } = this.state;
    const { data } = this.props;

    if (searchBy === 'title') {
      this.setState({ movies: data.filter(movie => movie.title.toLowerCase().includes(inputValue.toLowerCase())) });
    }

    if (searchBy === 'genre') {
      this.setState({ movies: data.filter(movie => movie.genre.toLowerCase().includes(inputValue.toLowerCase())) });
    }
  }

  handleSort(e) {
    this.setState({ sortBy: e.target.value });
  }

  handleFilter(e) {
    this.setState({ searchBy: e.target.value });
  }

  render() {
    const { movies, sortBy, searchBy } = this.state;
    let sortedMoviesList = [];

    if (sortBy === 'year') {
      sortedMoviesList = movies.sort((a, b) => b.year - a.year);
    }

    if (sortBy === 'rating') {
      sortedMoviesList = movies.sort((a, b) => b.rating - a.rating);
    }

    const moviesList = sortedMoviesList.map(movie => <MovieCard key={movie.id} data={movie} />);

    return (
      <React.Fragment>
        <div className="search-form">
          <label htmlFor="search-movies">
            <span>FIND YOUR MOVIE</span>
            <input type="text" id="search-movies" />
            <button type="button" onClick={this.handleClick} id="search-button">Search</button>
          </label>
          <div className="search-filter">
            Search by
            <span className="split-buttons">
              <button type="button" onClick={this.handleFilter} value="title" className={(searchBy === 'title') ? 'active' : ''}>Title</button>
              <button type="button" onClick={this.handleFilter} value="genre" className={(searchBy === 'genre') ? 'active' : ''}>Genre</button>
            </span>
          </div>
        </div>

        <div className="search-results-header">
          <div className="search-results-header-inner">
            <div className="search-results-found">
              { moviesList.length }
              <span> movies found</span>
            </div>
            <div className="search-results-sort">
              Sort by
              <span className="split-buttons">
                <button type="button" onClick={this.handleSort} value="year" className={(sortBy === 'year') ? 'active' : ''}>Release Date</button>
                <button type="button" onClick={this.handleSort} value="rating" className={(sortBy === 'rating') ? 'active' : ''}>Rating</button>
              </span>
            </div>
          </div>
        </div>

        <div className="search-results-container">
          { (moviesList.length > 0) ? moviesList : 'No Items Found' }
        </div>
      </React.Fragment>
    );
  }
}

export default MoviesSearch;
