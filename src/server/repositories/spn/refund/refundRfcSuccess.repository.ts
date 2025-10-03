import { InferInsertModel } from 'drizzle-orm';
import { db } from '~/server/db';
import { refundRfcSuccess } from '~/server/db/spn/schema';

export type RefundRfcSuccessCreate = InferInsertModel<typeof refundRfcSuccess>;

export const createMany = async (data: RefundRfcSuccessCreate[]) => {
  return await db.spn
    .insert(refundRfcSuccess)
    .values(data)
    .returning({ insertedId: refundRfcSuccess.id });
};
