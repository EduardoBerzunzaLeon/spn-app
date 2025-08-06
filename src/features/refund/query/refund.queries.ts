import { keepPreviousData, queryOptions } from '@tanstack/react-query';
import { serverFn } from '~/server/functions';
import { SearchSchemaI } from '~/shared';

export const refundKeys = {
  all: ['refund'] as const,
  consecutive: () => [...refundKeys.all, 'consecutive'] as const,
  consecutives: () => [...new Set([...refundKeys.consecutive(), ...refundKeys.lists()])] as const,
  lists: () => [...refundKeys.all, 'list'] as const,
  list: (props: SearchSchemaI) => [...refundKeys.lists(), { ...props }] as const,
  detail: (id: number) => [...refundKeys.all, id] as const,
};

export const refundQueries = {
  logs: (props: SearchSchemaI) =>
    queryOptions({
      queryKey: refundKeys.list(props),
      queryFn: ({ signal }) =>
        serverFn.refund.getLogs({
          data: { ...props },
          signal,
        }),
      placeholderData: keepPreviousData,
    }),
  lastConsecutive: () =>
    queryOptions({
      queryKey: refundKeys.consecutive(),
      queryFn: ({ signal }) => serverFn.refund.getLastConsecutive({ signal }),
    }),
};
