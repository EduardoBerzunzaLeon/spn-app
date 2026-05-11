import { createServerFn } from '@tanstack/react-start';

import { authMiddleware } from '~/lib/middleware';

export const protectedMutation = createServerFn({ method: 'POST' }).middleware([authMiddleware]);
export const protectedQuery = createServerFn({ method: 'GET' }).middleware([authMiddleware]);
