import { formOptions } from '@tanstack/react-form';

import { LoginSchema } from '~/shared';

export const signInFormOptions = formOptions({
  defaultValues: {
    email: 'test@example.com',
    password: 'password123',
  },
  validators: {
    onChange: LoginSchema,
  },
});
