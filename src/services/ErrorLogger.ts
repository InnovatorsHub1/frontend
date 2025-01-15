interface ErrorLoggerService {
  logError: (error: Error, context?: any) => void;
  getErrorMetadata: () => any;
  clearErrors: () => void;
}

const ErrorLogger: ErrorLoggerService = {
  logError: (error, context) => {
    console.error('Error logged:', error, context);
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