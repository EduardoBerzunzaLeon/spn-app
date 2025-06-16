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

type Form = Pick<ReturnType<typeof useAppForm>, 'handleSubmit'>;

export const useHandleSubmitForm = (form: Form) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, meta?: unknown) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit(meta);
  };

  return { handleSubmit };
};
