import React from 'react';
import styles from './component.css';

const AppHeaderComponent = () => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <a href="/">
        <h1 className={styles.logo}>
          Netflix
          <span>roulette</span>
        </h1>
      </a>
    </div>
  </header>
);

export default AppHeaderComponent;
