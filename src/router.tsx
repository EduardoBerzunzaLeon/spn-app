import * as Sentry from '@sentry/tanstackstart-react';
import { MutationCache, QueryClient } from '@tanstack/react-query';
import { createRouter } from '@tanstack/react-router';
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query';

import { DefaultCatchBoundary } from './features/core/components/errors/DefaultCatchBoundary';
import { NotFound } from './features/core/components/errors/NotFound';
import { routeTree } from './routeTree.gen';
import { isObject } from './shared';
import { toast } from './utils';

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

  const isProduction = process.env.NODE_ENV === 'production';

  if (!router.isServer) {
    Sentry.init({
      dsn: import.meta.env.VITE_DSN_SENTRY,
      environment: isProduction ? 'production' : 'development',
      integrations: [
        Sentry.tanstackRouterBrowserTracingIntegration(router),
        Sentry.replayIntegration(),
      ],
      sampleRate: 1.0,
      tracesSampleRate: isProduction ? 0.1 : 1.0,
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
    });
  } else {
    Sentry.init({
      dsn: process.env.SENTRY_SERVER_DSN || import.meta.env.VITE_DSN_SENTR,
      environment: isProduction ? 'production' : 'development',
      sampleRate: 1.0,
      tracesSampleRate: isProduction ? 0.1 : 1.0,
      // Nota: En el servidor NO se usan replays ni tracing de navegador
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
