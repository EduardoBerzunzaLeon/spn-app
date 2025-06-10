import { repository } from '~/server/repositories';
import { EditNotesRefundSchemaI } from '~/shared';

export const updateNotes = async (props: EditNotesRefundSchemaI) => {
  return await repository.spn.refunds.updateNotes(props);
};
