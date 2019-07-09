import React from 'react';
import PropTypes from 'prop-types';
import styles from './component.css';

class ErrorBoundaryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div className={styles.error}>
          <h1 className={styles.title}>Something went wrong</h1>
          <p className={styles.info}>
            <span>Please go back to </span>
            <a href="/">main page</a>
            <span> and try again. Thank you</span>
          </p>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundaryComponent;

ErrorBoundaryComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
