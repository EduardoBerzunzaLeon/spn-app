import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
import * as schema from './schema';

import 'dotenv/config';

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.SPN_BD_URL!,
});

const db_spn = drizzle(pool, {
  schema,
});

export { db_spn };
