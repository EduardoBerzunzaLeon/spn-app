import { controlSicon } from '../index';

import { protectedQuery } from '~/lib';

export const getFortnight = protectedQuery.handler(
  async () => await controlSicon.cases.getFortnightByModule()
);
