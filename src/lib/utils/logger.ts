export const logger = {
  error: (error: any, context?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('>>> [DEV ERROR]:', error, context);
    }
  },
  info: (message: string) => {
    if (process.env.NODE_ENV === 'development') console.log('>>> [INFO]:', message);
  },
};
