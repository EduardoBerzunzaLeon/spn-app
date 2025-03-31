import { createServerFn } from '@tanstack/react-start';
import { getWebRequest, setHeader } from '@tanstack/react-start/server';
import { auth } from '~/lib/auth';
import { LoginSchema } from '~/schemas';
import { useCases } from '~/server/useCases';

export const signIn = createServerFn()
  .validator(LoginSchema)
  .handler(async ({ data }) => {
    const response = await useCases.auth.signIn(data);
    setHeader('set-cookie', response.headers.getSetCookie());

    if (response.status !== 200) {
      throw new Error('Credenciales Incorrectas');
    }
  });

export const signOut = createServerFn().handler(async () => {
  const request = getWebRequest();

  if (!request?.headers) {
    throw new Error('No se encontró la sesión');
  }

  const response = await useCases.auth.signOut(request?.headers);
  setHeader('set-cookie', response.headers.getSetCookie());
  if (!response.response.success) {
    throw new Error('Ocurrio un error al momento de cerrar la sesión');
  }
});

export const getUser = createServerFn({ method: 'GET' }).handler(async () => {
  const { headers } = getWebRequest()!;
  const session = await auth.api.getSession({ headers });

  return session?.user || null;
});
