import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 my-8 max-w-xl mx-auto bg-cream-100 border-2 border-terracotta-500/40 rounded-2xl text-center">
          <h3 className="font-display font-black text-xl text-terracotta-600 mb-2">Notice</h3>
          <p className="font-typewriter text-xs text-ink-700 mb-4">
            A component encountered an issue rendering, but the rest of the site is functioning normally.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-4 py-2 bg-ink-900 text-cream-100 rounded text-xs font-mono"
          >
            Retry Component
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
