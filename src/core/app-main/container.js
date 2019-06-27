import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MoviesSearch from '../../feature/movies-search';
import MoviesDetail from '../../feature/movie-details';


class AppMain extends React.PureComponent {
  render() {
    return (
      <Router>
        <Route path="/" exact component={MoviesSearch} />
        <Route path="/movies/:id" component={MoviesDetail} />
      </Router>
    );
  }
}


export default AppMain;
