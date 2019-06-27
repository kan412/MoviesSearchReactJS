import React from 'react';

class AppFooter extends React.PureComponent {
  render() {
    return (
      <footer>
        <div className="footer-inner">
          <a href="/">
            <span className="logo">
              Netflix
              <span>roulette</span>
            </span>
          </a>
        </div>
      </footer>
    );
  }
}


export default AppFooter;
