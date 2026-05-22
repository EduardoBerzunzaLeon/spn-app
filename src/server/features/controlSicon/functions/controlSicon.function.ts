import { protectedQuery } from '~/server/utils';
import { controlSicon } from '../index';

export const getFortnight = protectedQuery.handler(
  async () => await controlSicon.cases.getFortnightByModule()
);
