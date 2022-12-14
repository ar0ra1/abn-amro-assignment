import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // console.warn(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2 data-testid="error-boundary" className="text-2xl text-abn-green">
          Something went wrong.
        </h2>
      );
    }

    return this.props.children;
  }
}
