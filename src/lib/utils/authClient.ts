import { usernameClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';

// import * as dotenv from 'dotenv';

// dotenv.config();

// console.log(process.env.BETTER_AUTH_URL);

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL!,
  // baseURL: 'http://localhost:3000',
  plugins: [usernameClient()],
});
