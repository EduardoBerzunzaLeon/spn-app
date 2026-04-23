import { createServerFn } from '@tanstack/react-start';

import { kardex } from '..';

import { KardexSearchByRFC } from '~/shared';

export const getPaymentCodeByRFC = createServerFn()
  .inputValidator(KardexSearchByRFC)
  .handler(async ({ data }) => await kardex.cases.getPaymentCodeByRFC(data.rfc));
