import { repository } from '~/server/repositories';
import type { SearchSchemaI } from '~/shared';

export const getLogs = async (props: SearchSchemaI) =>
  await repository.spn.refunds.getLogs({ ...props });
