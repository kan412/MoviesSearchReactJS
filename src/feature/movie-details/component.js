import React from 'react';
import MovieCard from '../../shared/movie-card';

const movieDetails = (props) => {
  const { data } = props;
  const currentPageData = data[3];
  const relatedMovies = data.filter((movie => movie.genre === currentPageData.genre && movie.id !== currentPageData.id));
  const moviesList = relatedMovies.map(movie => <MovieCard key={movie.id} data={movie} />);
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
          <span>Films by { currentPageData.genre } genre </span>
        </div>
      </div>

      <div className="search-results-container">
        { (moviesList.length > 0) ? moviesList : 'No Items Found' }
      </div>
    </React.Fragment>
  );
}

export default movieDetails;
