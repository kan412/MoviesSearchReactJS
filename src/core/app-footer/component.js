import React from 'react';
import styles from './component.css';

const AppFooterComponent = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <a href="/">
        <span className={styles.logo}>
          Netflix
          <span>roulette</span>
        </span>
      </a>
    </div>
  </footer>
);

export default AppFooterComponent;
