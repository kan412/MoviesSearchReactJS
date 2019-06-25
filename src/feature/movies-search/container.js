import React from 'react';
import MovieCard from '../../shared/movie-card';

class MoviesSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.results,
      searchby: 'title',
      sortby: 'releasedate',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const inputValue = document.getElementById('search-movies').value;

    this.setState(state => ({
      data: state.data.filter(movie => movie.title === inputValue),
    }));
  }

  render() {
    const { data } = this.state;
    const movies = data.map(movie => <MovieCard key={movie.id} data={movie} />);

    return (
      <React.Fragment>
        <form className="search-form">
          <label htmlFor="search-movies">
            <span>FIND YOUR MOVIE</span>
            <input type="text" id="search-movies" />
            <button type="button" onClick={this.handleClick}>Search</button>
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
              { movies.length }
              <span>movies found</span>
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
          { movies }
        </div>
      </React.Fragment>
    );
  }
}

// MoviesSearch.propTypes = {
//   results: PropTypes.
// };

export default MoviesSearch;
