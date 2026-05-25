import * as Sentry from '@sentry/node';
import { createMiddleware } from '@tanstack/react-start';

import { auth as betterAuth } from '~/lib/auth';
import { handlerError } from '~/shared';

export const errorMiddleware = createMiddleware().server(async ({ next, request }) => {
  try {
    const result = await next();
    return result;
  } catch (error) {
    const session = await betterAuth.api.getSession({ headers: request.headers });

    Sentry.withScope((scope) => {
      if (session?.user) {
        scope.setUser({
          id: session.user.id,
          email: session.user.email,
        });
      } else {
        scope.setUser({ id: 'notdefined' });
      }
      scope.setTag('auth_status', session?.user ? 'authenticated' : 'anonymous');
      scope.setExtra('url', request.url);
      scope.setExtra('method', request.method);
      Sentry.captureException(error);
    });

    throw handlerError(error);
  }
});
