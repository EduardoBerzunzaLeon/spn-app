import { registerGlobalMiddleware } from '@tanstack/react-start';
import { errorMiddleware } from './lib/middleware/error.middleware';
import { authMiddleware } from './lib/middleware/authGuard';

registerGlobalMiddleware({
  middleware: [errorMiddleware, authMiddleware],
});
