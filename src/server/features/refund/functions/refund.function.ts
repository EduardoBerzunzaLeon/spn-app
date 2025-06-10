import { createServerFn } from '@tanstack/react-start';
import { refund } from '../index';
import { errorMiddleware } from '~/lib/middleware';
import { EditNotesRefundSchema, RefundSearchSchema, withPaginationHandlerError } from '~/shared';

export const getRefundLogs = createServerFn()
  .validator(RefundSearchSchema)
  .handler(
    withPaginationHandlerError(async ({ data }) => {
      if (data.gFilter) {
        const rfcSuccess = [
          {
            id: 'rfcSuccess.rfc',
            value: data.gFilter,
            key: '',
          },
        ];

        const rfcError = [
          {
            id: 'rfcFailed.rfc',
            value: data.gFilter,
            key: '',
          },
        ];
        data.filters = [...data.filters, ...rfcSuccess, ...rfcError];
      }
      return await refund.cases.getLogs({ ...data });
    })
  );

export const updateNotes = createServerFn()
  .middleware([errorMiddleware])
  .validator(EditNotesRefundSchema)
  .handler(async ({ data }) => {
    await refund.cases.updateNotes(data);
    return { message: 'Nota actualizada' };
  });
