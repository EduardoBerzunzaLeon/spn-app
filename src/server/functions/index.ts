import * as auth from '../features/auth/functions';
import * as controlProcess from '../features/controlProcessFortnight/functions';
import * as controlSicon from '../features/controlSicon/functions';
import * as refund from '../features/refund/functions';
import * as kardex from '../features/kardex/functions';

export const serverFn = {
  auth: { ...auth },
  controlProcess: { ...controlProcess },
  controlSicon: { ...controlSicon },
  refund: { ...refund },
  kardex: { ...kardex },
};
