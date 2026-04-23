import { auth } from '~/lib/auth';
import type { LoginSchemaI } from '~/shared';

export const signIn = async (data: LoginSchemaI) =>
  await auth.api.signInEmail({
    body: data,
    asResponse: true,
  });
