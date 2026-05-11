import { getRequestHeaders } from '@tanstack/start/server';

import { auth as betterAuth } from '~/lib/auth';

export async function getOptionalUser() {
  const headers = getRequestHeaders();
  return await betterAuth.api.getSession({ headers });
}
