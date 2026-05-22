import { protectedMutation } from '~/server/utils';
import { controlProcess } from '../index';

export const getFortnight = protectedMutation.handler(
  async () => await controlProcess.cases.getSiapsepInitialData()
);
