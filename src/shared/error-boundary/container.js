import React from 'react';
import './component.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error">
          <h1>Something went wrong</h1>
          <p>Please go back to <a href="/">main page</a> and try again. Thank you</p>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
