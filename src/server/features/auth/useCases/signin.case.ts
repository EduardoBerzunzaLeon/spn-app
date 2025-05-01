import { auth } from '~/lib/auth';
import { LoginSchemaI } from '~/shared';

export const signIn = async (data: LoginSchemaI) => {
  return await auth.api.signInEmail({
    body: data,
    asResponse: true,
  });
};
