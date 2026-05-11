import * as Sentry from '@sentry/tanstackstart-react';
import { MutationCache, QueryClient } from '@tanstack/react-query';
import { createRouter } from '@tanstack/react-router';
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query';
import * as dotenv from 'dotenv';

import { DefaultCatchBoundary } from './features/core/components/errors/DefaultCatchBoundary';
import { NotFound } from './features/core/components/errors/NotFound';
import { routeTree } from './routeTree.gen';
import { isObject } from './shared';
import { toast } from './utils';

dotenv.config({ path: './.env.development' });

const handleErrorMessage = (errorMessage?: string) => {
  if (!errorMessage) {
    return 'Error inmanegable, favor de verificar los logs';
  }

  if (errorMessage.length > 100) {
    return 'Error demasiado largo, favor de verificar los logs';
  }

  return errorMessage;
};

export function getRouter() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60,
        retry: 0,
      },
    },
    mutationCache: new MutationCache({
      onError: (error) => {
        // Sentry.captureException(error, {
        //   extra: { section: 'Mutation', retryCount: 3 },
        // });
        const message = handleErrorMessage(error.message);
        return toast.error(message);
      },
      onSuccess: (data: { message: string } | unknown) => {
        const message =
          isObject(data) && typeof (data as any)?.message === 'string'
            ? (data as { message: string }).message
            : '';

        if (message) {
          return toast.success(message);
        }
      },
    }),
  });

  const router = createRouter({
    routeTree,
    context: {
      queryClient,
      crumb: null,
      iconName: null,
    },
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => <NotFound />,
    scrollRestoration: true,
    defaultStructuralSharing: true,
    notFoundMode: 'fuzzy',
  });

  if (typeof window !== 'undefined') {
    Sentry.init({
      dsn: process.env.DSN_SENTRY, // Lo obtienes al crear el proyecto en sentry.io
      integrations: [
        Sentry.tanstackRouterBrowserTracingIntegration(router),
        Sentry.replayIntegration(),
      ],
      // Ajustes recomendados para desarrollo:
      tracesSampleRate: 1.0,
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
    });
  }

  setupRouterSsrQueryIntegration({
    router,
    queryClient,
  });

  return router;
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
