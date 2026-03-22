import { auth } from '..';
import { createServerFn } from '@tanstack/react-start';
import { getRequest, getRequestHeaders, setResponseHeaders } from '@tanstack/react-start/server';
import { auth as betterAuth } from '~/lib/auth';
import { errorMiddleware } from '~/lib/middleware';
import { ErrorApp, LoginSchema } from '~/shared';

export const signIn = createServerFn({ method: 'POST' })
  .middleware([errorMiddleware])
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

export const signOut = createServerFn({ method: 'POST' }).handler(async () => {
  const request = getRequest();

  if (!request?.headers) {
    throw new Error('No se encontró la sesión');
  }

  const response = await auth.cases.signOut(request?.headers);
  const headers = new Headers();
  response.headers.getSetCookie().forEach((cookie) => {
    headers.append('set-cookie', cookie);
  });
  setResponseHeaders(headers);
  if (!response.ok) {
    throw new Error('Ocurrio un error al momento de cerrar la sesión');
  }
});

export const getUser = createServerFn({ method: 'GET' }).handler(async () => {
  try {
    // const request = getRequest();

    // if (!request?.headers) {
    //   throw new Error('No se encontró la sesión');
    // }
    const headers = getRequestHeaders();
    const session = await betterAuth.api.getSession({ headers });

    // return session?.user || null;
    if (!session) {
      throw new Error("Unauthorized");
    }

    return session;
  } catch (error) {
    return null;
  }
});
