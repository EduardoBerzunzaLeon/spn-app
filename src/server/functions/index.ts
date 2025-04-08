import * as auth from '../features/auth/functions';
import * as controlProcess from '../features/controlProcessFortnight/functions';
import * as controlSicon from '../features/controlSicon/functions';

export const serverFn = {
  auth: { ...auth },
  controlProcess: { ...controlProcess },
  controlSicon: { ...controlSicon },
};
