import { createFormHook } from '@tanstack/react-form';
import { fieldContext, formContext } from '../context';
import { PasswordField, SubmitButton, TextareaField, TextField } from '~/features/form/components';

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
    PasswordField,
    TextareaField,
  },
  formComponents: {
    SubmitButton,
  },
});
