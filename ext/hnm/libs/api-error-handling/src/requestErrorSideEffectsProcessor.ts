import { ErrorHandler } from './ErrorHandler';
import { unauthorizedErrorHandler } from './unauthorizedErrorHandler';
import { errorLoggingHandler } from './errorLoggingHandler';

const errorHandlersChain: ErrorHandler[] = [
  errorLoggingHandler,
  unauthorizedErrorHandler,
];

const requestErrorSideEffectsProcessor = (error: Error): void => {
  errorHandlersChain.forEach(errorHandler => errorHandler.handle(error));

  throw error;
};

export default requestErrorSideEffectsProcessor;
