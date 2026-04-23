import type { MRT_RowData } from 'mantine-react-table';

import type { DataPagination } from '~/features/core/hooks';
import { handlerError, type SearchSchemaI } from '~/shared';

export const withPaginationHandlerError =
  <T extends MRT_RowData>(
    handler: (ctx: { data: SearchSchemaI }) => Promise<DataPagination<T>>
  ): ((ctx: any) => Promise<{
    data: T[] | [];
    meta: { totalRowCount: number };
    error?: { message: string; code: number };
  }>) =>
  async (ctx) => {
    try {
      return await handler(ctx);
    } catch (error) {
      const { message, status } = handlerError(error);

      return {
        data: [],
        meta: { totalRowCount: 0 },
        error: {
          message,
          code: status,
        },
      };
    }
  };
