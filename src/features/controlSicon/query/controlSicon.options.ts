import { queryOptions } from '@tanstack/react-query';
import { controlSiconKeys } from './controlSicon.keys';
import { serverFn } from '~/server/functions';

export const controlSiconQueryOptions = () =>
  queryOptions({
    queryKey: controlSiconKeys.all,
    queryFn: ({ signal }) => serverFn.controlSicon.getFortnight({ signal }),
  });
