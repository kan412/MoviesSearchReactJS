import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../../shared/movie-card';
import { moviesList } from '../../shared/constants';
import './component.css';

const movieDetails = ({ match }) => {
  const currentPageData = moviesList[parseInt(match.params.id, 10) - 1];
  const relatedMovies = moviesList.filter(
    movie => movie.genre === currentPageData.genre && movie.id !== currentPageData.id,
  );
  const movList = relatedMovies.map(movie => <MovieCard key={movie.id} data={movie} />);
  return (
    <React.Fragment>
      <div className="movie-summary">
        <div className="image">
          <img src={currentPageData.thumbnail} alt={currentPageData.title} />
        </div>

        <div className="details">
          <h1 className="title">
            {currentPageData.title}
            <span className="rating">{currentPageData.rating}</span>
          </h1>
          <div className="meta">
            <span className="release-year">
              <span>{currentPageData.year}</span>
              Year
            </span>
            <span className="duration">
              <span>{currentPageData.duration}</span>
               Mins
            </span>
          </div>

          <div className="description">
            {currentPageData.description}
          </div>
        </div>
      </div>

      <div className="search-results-header">
        <div className="search-results-header-inner">
          <span>Films by </span>
          { currentPageData.genre }
          <span> genre </span>
        </div>
      </div>

      <div className="search-results-container">
        { (movList.length > 0) ? movList : 'No Items Found' }
      </div>
    </React.Fragment>
  );
};

movieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default movieDetails;
