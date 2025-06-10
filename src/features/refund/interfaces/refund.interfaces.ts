import { getRefundLogs } from '~/server/features/refund/functions';
import { ReturnPaginateData } from '~/shared';

export type RefundsLogs = ReturnPaginateData<typeof getRefundLogs>;
