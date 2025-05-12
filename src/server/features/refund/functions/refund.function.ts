import { createServerFn } from '@tanstack/react-start';
import { refund } from '../index';

export const getRefundLogs = createServerFn()
  .validator((data: { limit: number; page: number, orderBy: string, order: 'asc' | 'desc' }) => data)
  .handler(async (ctx) => {
    return await refund.cases.getLogs({ ...ctx.data });
  });
