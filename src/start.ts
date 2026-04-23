import { createStart } from '@tanstack/react-start';

import { authMiddleware, errorMiddleware } from './lib/middleware';

export const startInstance = createStart(() => ({
  requestMiddleware: [authMiddleware, errorMiddleware],
}));
