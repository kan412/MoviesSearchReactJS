import React from 'react';
import AppHeader from './app-header';
import AppMain from './app-main';
import AppFooter from './app-footer';
import styles from './component.css';

class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <AppMain />
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default App;
