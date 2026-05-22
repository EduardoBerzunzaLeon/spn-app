import { createServerFn } from '@tanstack/react-start';
import { getRequestHeaders, setResponseHeaders } from '@tanstack/react-start/server';

import { auth } from '..';

import { auth as betterAuth } from '~/lib/auth';
import { protectedMutation } from '~/server/utils';
import { ErrorApp, LoginSchema } from '~/shared';

export const signIn = createServerFn({ method: 'POST' })
  .inputValidator(LoginSchema)
  .handler(async ({ data }) => {
    const response = await auth.cases.signIn(data);
    const headers = new Headers();

    response.headers.getSetCookie().forEach((cookie) => {
      headers.append('set-cookie', cookie);
    });
    setResponseHeaders(headers);

    if (response.status !== 200) {
      throw ErrorApp.badRequest('Credenciales Incorrectas');
    }
  });

export const signOut = protectedMutation.handler(async ({ context }) => {
  const response = await auth.cases.signOut(context?.headers);
  // TODO: Revisar si quitando esto, funciona igual
  const headers = new Headers();
  response.headers.getSetCookie().forEach((cookie) => {
    headers.append('set-cookie', cookie);
  });
  setResponseHeaders(headers);
  if (!response.ok) {
    throw new Error('Ocurrio un error al momento de cerrar la sesión');
  }
});

export const getUser = createServerFn().handler(async () => {
  try {
    // const session = await getOptionalUser();
    const headers = getRequestHeaders();
    const session = await betterAuth.api.getSession({ headers });
    return session?.user ?? null;
  } catch {
    return null;
  }
});
