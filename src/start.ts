import {
  sentryGlobalFunctionMiddleware,
  // sentryGlobalRequestMiddleware,
} from '@sentry/tanstackstart-react';
import { createStart } from '@tanstack/react-start';

import { errorMiddleware } from './lib/middleware';

export const startInstance = createStart(() => ({
  // requestMiddleware: [sentryGlobalRequestMiddleware, errorMiddleware],
  requestMiddleware: [errorMiddleware],
  functionMiddleware: [sentryGlobalFunctionMiddleware],
}));
