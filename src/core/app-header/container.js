import React from 'react';

class AppHeader extends React.PureComponent {
  render() {
    return (
      <header>
        <div className="header-inner">
          <a href="/">
            <h1 className="logo">
              Netflix
              <span>roulette</span>
            </h1>
          </a>
        </div>
      </header>
    );
  }
}


export default AppHeader;
