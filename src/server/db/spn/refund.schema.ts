import { boolean, pgSchema, pgTable, text, timestamp } from 'drizzle-orm/pg-core';


export const refundSchema = pgSchema('refunds');

export const refundLogs =  refundSchema.table('re_logs', {
    

})