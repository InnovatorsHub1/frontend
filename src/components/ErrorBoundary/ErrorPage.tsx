import React from 'react';

type ErrorPageProps = {
  title: string;
  message: string;
  code?: number;
  illustration?: React.ReactNode;
  actions?: React.ReactNode[];
  onRetry?: () => void;
  className?: string;
};

const ErrorPage: React.FC<ErrorPageProps> = ({ title, message, code, illustration, actions, onRetry, className }) => {
  return (
    <div className={`error-page ${className || ''}`}>
      {illustration && <div className='illustration'>{illustration}</div>}
      <h1>{title}</h1>
      {code && <p>Error Code: {code}</p>}
      <p>{message}</p>
      {onRetry && <button onClick={onRetry}>Retry</button>}
      {actions && actions.map((action, index) => <div key={index}>{action}</div>)}
    </div>
  );
};

export default ErrorPage;
