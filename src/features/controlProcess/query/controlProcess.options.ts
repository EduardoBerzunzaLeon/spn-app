import { queryOptions } from '@tanstack/react-query';
import { controlProcessKeys } from './controlProcess.keys';
import { serverFn } from '~/server/functions';



export const controlProcessQueryOptions = () =>
  queryOptions({
    queryKey: controlProcessKeys.all,
    queryFn: ({ signal }) => serverFn.controlProcess.getFortnight({ signal }),
  });
