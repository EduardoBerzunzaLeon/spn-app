import { createMiddleware } from '@tanstack/react-start';
import { getWebRequest, setResponseStatus } from '@tanstack/react-start/server';
import { auth } from '~/lib/auth';

export const authMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    const webRequest = getWebRequest();
    if (!webRequest) {
      setResponseStatus(500);
      throw new Error('Internal server error');
    }

    const { headers } = webRequest;

    const session = await auth.api.getSession({
      headers,
      query: {
        disableCookieCache: true,
      },
    });

    if (!session || !session.user) {
      setResponseStatus(401);
      throw new Error('Unauthorized');
    }

    return next({ context: { user: session.user } });
  } catch (error) {
    throw error;
  }
});
