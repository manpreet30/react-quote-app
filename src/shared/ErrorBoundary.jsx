import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <p style={{ color: "red" }}>{this.state.error}</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
