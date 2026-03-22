import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { username } from 'better-auth/plugins';
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { db } from '../server/db';

// TODO: REVIEW THIS, IT SEEMS TO BE CAUSING PROBLEMS WITH VITE

export const auth = betterAuth({
  database: drizzleAdapter(db.spn, {
    provider: 'pg', // or "mysql", "sqlite"
  }),
  advanced: {
    cookiePrefix: 'spn',
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // 5 minutes
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: [
		"http://localhost:3000", // Your frontend URL
		"https://yourdomain.com"
	],
  trustHost: true,
  baseURL: process.env.BETTER_AUTH_URL,
  plugins: [username(), tanstackStartCookies()],
});
