import * as dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';

dotenv.config();

export default {
  out: './.drizzle-sicon',
  dialect: 'mysql',
  breakpoints: true,
  verbose: true,
  strict: true,
  dbCredentials: {
    url: 'mysql://admin:T2Zasb8TUW@seduc-rds-mysql.cdy3wulktq0e.us-east-1.rds.amazonaws.com:3306/sicon',
  },
} as Config;
