import { usernameClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';

import * as dotenv from 'dotenv';

dotenv.config();

// FIXME: THIS DOESN'T SEEM TO BE WORKING, REVIEW THIS
export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL!,
  // baseURL: import.meta.env.VITE_BETTER_AUTH_URL || window.location.origin,
  plugins: [usernameClient()],
});
