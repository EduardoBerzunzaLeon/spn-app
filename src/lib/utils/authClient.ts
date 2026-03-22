import { usernameClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';

import 'dotenv/config';

// import * as dotenv from 'dotenv';

// dotenv.config();

// FIXME: THIS DOESN'T SEEM TO BE WORKING, REVIEW THIS
export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL!,
  plugins: [usernameClient()],
});
