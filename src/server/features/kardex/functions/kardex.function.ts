import { kardex } from '..';

import { protectedQuery } from '~/lib';
import { KardexSearchByRFC } from '~/shared';

export const getPaymentCodeByRFC = protectedQuery
  .inputValidator(KardexSearchByRFC)
  .handler(async ({ data }) => await kardex.cases.getPaymentCodeByRFC(data.rfc));
