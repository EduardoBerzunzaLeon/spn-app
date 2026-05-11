import { controlProcess } from '../index';

import { protectedQuery } from '~/lib';

export const getFortnight = protectedQuery.handler(
  async () => await controlProcess.cases.getSiapsepInitialData()
);
