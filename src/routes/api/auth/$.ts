import { createFileRoute } from '@tanstack/react-router';

import { auth, auth } from '~/lib/auth';

export const Route = createFileRoute('/api/auth/$' as never)({
  server: {
    handlers: {
      GET: async ({ request }: { request: Request }) => await auth.handler(request),
      POST: async ({ request }: { request: Request }) => await auth.handler(request),
    },
  },
});
