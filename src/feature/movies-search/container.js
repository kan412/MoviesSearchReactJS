import React from 'react';
import MovieCard from '../../shared/movie-card';

class MoviesSearch extends React.PureComponent {

  constructor() {
    super();

    this.state = {
      data: this.props.results,
    };
  }

  render() {
    return (
      <React.Fragment>
        <form className="search-form">
          <label htmlFor="search-movies">
            <span>FIND YOUR MOVIE</span>
            <input type="text" id="search-movies" />
            <button type="button">Search</button>
          </label>
          <div className="search-filter">
            Search by
            <span className="buttons">
              <button type="button">Title</button>
              <button type="button">Genre</button>
            </span>
          </div>
        </form>

        <div className="search-results-header">
          <div className="search-results-header-inner">
            <div className="search-results-found">
              10 movies found
            </div>
            <div className="sort-filter">
              Sort by
              <span className="buttons">
                <button type="button">Release Date</button>
                <button type="button">Rating</button>
              </span>
            </div>
          </div>
        </div>

        <div className="search-results-container">
          <MovieCard data={ this.state.data }/>
        </div>
      </React.Fragment>
    );
  }
}

export default MoviesSearch;
