type ErrorLoggerService = {
  logError: (error: Error, context?: any) => void;
  getErrorMetadata: () => any;
  clearErrors: () => void;
};

const ErrorLogger: ErrorLoggerService = {
  logError: (error, context) => {
    console.error('Error logged:', error, context);
    console.error('User Info:', context?.userInfo);
    console.error('Environment:', context?.environment);
    // In the future we should send error to an error tracking service
  },
  getErrorMetadata: () => {
    return {
      userAgent: navigator.userAgent,
      timestamp: new Date(),
    };
  },
  clearErrors: () => {
    console.clear();
  },
};

export default ErrorLogger;
