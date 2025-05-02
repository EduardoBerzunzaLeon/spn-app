import { timestamp } from 'drizzle-orm/pg-core';

const createdAt = timestamp().defaultNow().notNull();

const timestamps = {
    createAt,
    deletedAt: timestamp(),
    updatedAt: timestamp(),
}