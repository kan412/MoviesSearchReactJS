import React from 'react';
import AppHeader from './app-header';
import AppMain from './app-main';
import AppFooter from './app-footer';
import ErrorBoundary from '../shared/error-boundary';
import './component.css';

const App = () => (
  <React.Fragment>
    <AppHeader />
    <ErrorBoundary>
      <AppMain />
    </ErrorBoundary>
    <AppFooter />
  </React.Fragment>
);

export default App;
