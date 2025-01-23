import React from 'react';
import TestError from './TestError';

// TestErrorPage component is a simple page that renders the TestError component for testing.
const TestErrorPage: React.FC = () => {
  return (
    <div>
      <h1>Test Error Page</h1>
      <TestError />
    </div>
  );
};

export default TestErrorPage;
