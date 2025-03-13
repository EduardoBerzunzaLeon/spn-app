import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
import * as schema from './schema';

const { Pool } = pkg;

const pool = new Pool({
  connectionString: 'postgres://postgres:postgres@localhost:5432/test_db',
});

const db_spn = drizzle(pool, {
  schema,
});

export { db_spn };
