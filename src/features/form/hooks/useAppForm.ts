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

// type UseAppFormOptions = Parameters<typeof useAppForm>[0];

// export const useTestForm = <T extends TFormData>(options: UseAppFormOptions) => {
//   const form = useAppForm<
//     T,
//     TOnMount,
//     TOnChange,
//     TOnChangeAsync,
//     TOnBlur,
//     TOnBlurAsync,
//     TOnSubmit,
//     TOnSubmitAsync,
//     TOnServer
//   >(options);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     e.stopPropagation();
//     form.handleSubmit();
//   };

//   return { ...form, handleSubmit };
// };
