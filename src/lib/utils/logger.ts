// import * as Sentry from '@sentry/tanstackstart-react';

export const logger = {
  error: (error: any, context?: any) => {
    // Sentry.captureException(error, { extra: context });

    if (process.env.NODE_ENV === 'development') {
      console.error('>>> [DEV ERROR]:', error, context);
    }
  },
  info: (message: string) => {
    if (process.env.NODE_ENV === 'development') console.log('>>> [INFO]:', message);
  },
};
