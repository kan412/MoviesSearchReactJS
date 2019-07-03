import React from 'react';
import styles from './NotFound.css';

const notFound = () => (
  <div className={styles.error}>
    <h1 className={styles.title}>404! Page not found</h1>
    <p className={styles.info}>
      <span>Please go back to </span>
      <a href="/">main page</a>
      <span> and try again. Thank you</span>
    </p>
  </div>
);

export default notFound;
