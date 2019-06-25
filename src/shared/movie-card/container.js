import React from 'react';

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

export default movieCard;
