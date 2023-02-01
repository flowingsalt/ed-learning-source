import { getConfig } from '@hnm/config';
import { ErrorHandler } from './ErrorHandler';
import { ApiError } from './ApiError';

export const unauthorizedErrorHandler: ErrorHandler = {
  handle: error => {
    const apiError = error as ApiError;
    if (
      (apiError?.statusCode ?? -1) === 403 ||
      (apiError?.message ?? '').includes('403:')
    ) {
      const config = getConfig();
      window.location.href = `${config.edsPostLogoutRedirectUrl}ui/logout/prepare-logout`;
    }
  },
};
