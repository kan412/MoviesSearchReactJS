import React from 'react';
import MoviesSearch from '../../feature/movies-search';
import { moviesList } from '../../shared';

class AppMain extends React.PureComponent {
  render() {
    // const mList = JSON.stringify(moviesList);
    return (
      <MoviesSearch results={moviesList} />
    );
  }
}


export default AppMain;
