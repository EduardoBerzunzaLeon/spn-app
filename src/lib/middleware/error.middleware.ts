import * as Sentry from '@sentry/node';
import { createMiddleware } from '@tanstack/react-start';

import { auth as betterAuth } from '~/lib/auth';
import { handlerError } from '~/shared';

//request
export const errorMiddleware = createMiddleware().server(async ({ next, request }) => {
  try {
    const result = await next();
    return result;
  } catch (error) {
    const session = await betterAuth.api.getSession({ headers: request.headers });

    Sentry.captureException(error, {
      user: { id: session?.user?.id || 'notdefined ' },
      extra: { url: request.url },
    });
    Sentry.withScope((scope) => {
      if (session?.user) {
        scope.setUser({
          id: session.user.id,
          email: session.user.email,
        });
      } else {
        scope.setUser(null);
      }
      scope.setTag('auth_status', session?.user ? 'authenticated' : 'anonymous');
      Sentry.captureException(error, { extra: { url: request.url } });
    });
    throw handlerError(error);
  }
});
