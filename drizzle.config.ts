import * as dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';

dotenv.config();

export default {
  schema: './src/server/db/spn/schema.ts',
  out: './.drizzle',
  dialect: 'postgresql',
  //   breakpoints: true,
  //   verbose: true,
  //   strict: true,
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} as Config;
