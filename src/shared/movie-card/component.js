import React from 'react';
import { Link } from 'react-router-dom';

const movieCard = ({ data }) => (
  <div className="movie card">
    <Link to={`/movies/${data.id}`}>
      <img src={data.thumbnail} alt={data.title} className="movie-thumbnail" />
    </Link>
    <div className="movie-header">
      <span className="movie-name">{data.title}</span>
      <span className="movie-release-date">{data.year}</span>
      <span className="movie-genre">{data.genre}</span>
    </div>
  </div>
);

export default movieCard;
