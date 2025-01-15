import React, { useState } from 'react';

const TestError: React.FC = () => {
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error('Test Error');
  }

  return <button onClick={() => setThrowError(true)}>Trigger Error</button>;
};

export default TestError;
