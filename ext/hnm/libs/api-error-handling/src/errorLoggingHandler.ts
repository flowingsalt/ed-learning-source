import { ErrorHandler } from './ErrorHandler';

export const errorLoggingHandler: ErrorHandler = {
  handle: error => {
    console.error(error);
  },
};
