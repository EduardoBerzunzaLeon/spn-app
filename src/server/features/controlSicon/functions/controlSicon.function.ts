import { createServerFn } from '@tanstack/react-start';

import { controlSicon } from '../index';

export const getFortnight = createServerFn().handler(
  async () => await controlSicon.cases.getFortnightByModule()
);
