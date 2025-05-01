import { formOptions } from '@tanstack/react-form';
import { LoginSchema } from '~/shared';

export const signInFormOptions = formOptions({
  defaultValues: {
    email: 'eduardo@gmail.com',
    password: '123456790',
  },
  validators: {
    onChange: LoginSchema,
  },
});
