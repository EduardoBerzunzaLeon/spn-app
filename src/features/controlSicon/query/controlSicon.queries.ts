import { queryOptions } from '@tanstack/react-query';
import { serverFn } from '~/server/functions';

export const controlSiconKeys = {
  all: ['sicon_status'] as const,
};

export const controlSiconQueries = {
  fortnight: () =>
    queryOptions({
      queryKey: controlSiconKeys.all,
      queryFn: ({ signal }) => serverFn.controlSicon.getFortnight({ signal }),
    }),
};
