import { refund } from '../index';

import { protectedMutation, protectedQuery } from '~/server/utils';
import { RefundSearchSchema, RefundUpdateNotesSchema, withPaginationHandlerError } from '~/shared';

export const getLogs = protectedQuery.inputValidator(RefundSearchSchema).handler(
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

export const updateNotes = protectedMutation
  .inputValidator(RefundUpdateNotesSchema)
  .handler(async ({ data }) => {
    await refund.cases.updateNotes(data);
    return { message: 'Nota actualizada' };
  });

export const generateConsecutive = protectedMutation.handler(async ({ context }) => {
  await refund.cases.generateConsecutive(context.user.id);
  return { message: 'Consecutivo generado correctamente' };
});

export const getLastConsecutive = protectedQuery.handler(
  async () => await refund.cases.getLastConsecutive()
);
