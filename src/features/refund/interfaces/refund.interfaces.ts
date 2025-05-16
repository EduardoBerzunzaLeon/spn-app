import { getRefundLogs } from '~/server/features/refund/functions';
import { ArrayElement } from '~/shared';

export type RefundsLogs = ArrayElement<Awaited<ReturnType<typeof getRefundLogs>>['data']>;
