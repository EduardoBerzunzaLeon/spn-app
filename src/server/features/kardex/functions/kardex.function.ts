import { protectedQuery } from '~/server/utils';
import { kardex } from '..';

import { KardexSearchByRFC } from '~/shared';

export const getPaymentCodeByRFC = protectedQuery
  .inputValidator(KardexSearchByRFC)
  .handler(async ({ data }) => await kardex.cases.getPaymentCodeByRFC(data.rfc));
