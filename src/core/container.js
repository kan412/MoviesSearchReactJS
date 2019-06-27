import React from 'react';
import AppHeader from './app-header';
import AppMain from './app-main';
import AppFooter from './app-footer';
import ErrorBoundary from '../shared/error-boundary';
import './component.css';

class App extends React.PureComponent {
  render() {
    return (
      <ErrorBoundary>
        <AppHeader />
        <AppMain />
        <AppFooter />
      </ErrorBoundary>
    );
  }
}

export default App;
