import React from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import MoviesSearch from '../../feature/movies-search';
import MoviesDetail from '../../feature/movie-details';
import NotFound from '../../shared/not-found';
import store from '../store/store';


export const AppMainComponent = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={MoviesSearch} />
        {/* <Route path="/search/:query" component={MoviesSearch} /> */}
        <Route path="/film/:id" component={MoviesDetail} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  </Provider>
);

export default AppMainComponent;
