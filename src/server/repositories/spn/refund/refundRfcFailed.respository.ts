import { InferInsertModel } from 'drizzle-orm';
import { db } from '~/server/db';
import { refundRfcFailed } from '~/server/db/spn/schema';

export type RefundRfcFailedCreate = InferInsertModel<typeof refundRfcFailed>;

export const createMany = async (data: RefundRfcFailedCreate[]) => {
  return await db.spn
    .insert(refundRfcFailed)
    .values(data)
    .returning({ insertedId: refundRfcFailed.id });
};
