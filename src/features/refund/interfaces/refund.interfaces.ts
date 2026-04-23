import type { serverFn } from '~/server/functions';
import type { ReturnPaginateData } from '~/shared';

export type RefundsLogs = ReturnPaginateData<typeof serverFn.refund.getLogs>;
