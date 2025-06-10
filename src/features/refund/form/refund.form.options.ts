import { formOptions } from '@tanstack/react-form';
import { EditNotesRefundSchema } from '~/shared';

export const editNoteFormOptions = formOptions({
  validators: {
    onChange: EditNotesRefundSchema,
  },
});
