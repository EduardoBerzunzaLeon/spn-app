import * as v from 'valibot';

import { DEFAULT_REFUND_SEARCH, getSearchSchema } from '../pagination';

export const RefundUpdateNotesSchema = v.object({
  id: v.pipe(v.number(), v.toMinValue(1), v.integer()),
  notes: v.fallback(v.pipe(v.string(), v.trim()), ''),
});

export const RefundSearchSchema = getSearchSchema(DEFAULT_REFUND_SEARCH.orderBy);

export type RefundUpdateNotesSchemaI = v.InferOutput<typeof RefundUpdateNotesSchema>;
