import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../shared/store/reducers';
import MoviesSearch from '../../feature/movies-search';
import MoviesDetail from '../../feature/movie-details';
import NotFound from '../../shared/not-found';

const store = createStore(rootReducer);

const AppMain = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={MoviesSearch} />
        <Route path="/film/:id" component={MoviesDetail} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default AppMain;
