import { repository } from '~/server/repositories';
import type { RefundUpdateNotesSchemaI } from '~/shared';

export const updateNotes = async (props: RefundUpdateNotesSchemaI) =>
  await repository.spn.refunds.updateNotes(props);
