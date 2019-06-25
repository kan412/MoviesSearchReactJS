import React from 'react';


const movieCard = props => (
  <div className="movie card">
    <img src={props.thumbnail} alt={props.name} className="movie-thumbnail" />
    <div className="movie-header">
      <span className="movie-name">{props.name}</span>
      <span className="movie-release-date">2004</span>
      <span className="movie-genre">Action</span>
    </div>
  </div>
);


export default movieCard;
