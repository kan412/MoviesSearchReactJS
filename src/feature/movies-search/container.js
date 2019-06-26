import React from 'react';
import MovieCard from '../../shared/movie-card';

class MoviesSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.results,
      searchBy: 'title',
      sortBy: 'releasedate',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    const inputValue = document.getElementById('search-movies').value;

    if (this.state.searchBy === 'title') {
      this.setState(state => ({
        data: state.data.filter(movie => movie.title === inputValue),
      }));
    }

    if (this.state.searchBy === 'genre') {
      this.setState(state => ({
        data: state.data.filter(movie => movie.genre === inputValue),
      }));
    }
  }

  handleChange(e) {
    this.setState({ searchBy: e.target.value });
  }

  render() {
    const { data } = this.state;
    const movies = data.map(movie => <MovieCard key={movie.id} data={movie} />);

    return (
      <React.Fragment>
        <div className="search-form">
          <label htmlFor="search-movies">
            <span>FIND YOUR MOVIE</span>
            <input type="text" id="search-movies" />
            <button type="button" onClick={this.handleClick}>Search</button>
          </label>
          <div className="search-filter">
            Search by
            <span className="buttons">

              <label htmlFor="radio-title">
                Title
                <input type="radio" name="search-by" onChange={this.handleChange} value="title" id="radio-title" checked={this.state.searchBy === 'title'} />
              </label>


              <label htmlFor="radio-genre">
                Genre
                <input type="radio" name="search-by" onChange={this.handleChange} value="genre" id="radio-genre" checked={this.state.searchBy === 'genre'} />
              </label>
            </span>
          </div>
        </div>

        <div className="search-results-header">
          <div className="search-results-header-inner">
            <div className="search-results-found">
              { movies.length }
              <span> movies found</span>
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
