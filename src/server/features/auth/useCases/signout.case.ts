import { auth } from '~/lib/auth';

export const signOut = async (headers: Headers) =>
  await auth.api.signOut({ headers, asResponse: true, returnHeaders: true });
