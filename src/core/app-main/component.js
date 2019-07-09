import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducers';
import MoviesSearch from '../../feature/movies-search';
import MoviesDetail from '../../feature/movie-details';
import NotFound from '../../shared/not-found';

const store = createStore(rootReducer, applyMiddleware(thunk));

const AppMainComponent = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={MoviesSearch} />
        {/* <Route path="/search/:query" component={MoviesSearch} /> */}
        <Route path="/film/:id" component={MoviesDetail} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default AppMainComponent;
