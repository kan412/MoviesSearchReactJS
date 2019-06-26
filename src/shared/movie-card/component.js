import React from 'react';
// import PropTypes from 'prop-types';

const movieCard = ({ data }) => (
  <div className="movie card">
    <img src={data.thumbnail} alt={data.title} className="movie-thumbnail" />
    <div className="movie-header">
      <span className="movie-name">{data.title}</span>
      <span className="movie-release-date">{data.year}</span>
      <span className="movie-genre">{data.genre}</span>
    </div>
  </div>
);

// movieCard.propTypes = {
//   data.title: PropTypes.string.isRequired,
//   data.year: PropTypes.number.isRequired,
//   data.genre: PropTypes.string.isRequired,
//   data.thumbnail: PropTypes.string.isRequired,
// };

export default movieCard;
