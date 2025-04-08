import { createMiddleware } from '@tanstack/react-start';
import { handlerError } from '~/server/features/errors';

export const errorMiddleware = createMiddleware().server(async ({ next }) => {
  console.log({ error: 'Error middleware' });
  try {
    const result = await next();
    return result;
  } catch (error) {
    throw handlerError(error);
    // throw new Error('palaverga');
  }
});
