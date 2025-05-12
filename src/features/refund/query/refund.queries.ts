import { keepPreviousData, queryOptions } from '@tanstack/react-query';
import { serverFn } from '~/server/functions';

export const refundKeys = {
  all: ['refund'] as const,
};

interface Props {
  limit: number;
  page: number;
  orderBy: string;
  order: 'asc' | 'desc';
}

export const refundQueries = {
  logs: ({ limit, page, orderBy, order }: Props) =>
    queryOptions({
      queryKey: [...refundKeys.all, limit, page, orderBy, order],
      queryFn: ({ signal }) => serverFn.refund.getRefundLogs({ data: { limit, page, orderBy, order }, signal }),
      placeholderData: keepPreviousData,
    }),
};
