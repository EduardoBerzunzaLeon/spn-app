// export const

import { createServerFn } from '@tanstack/react-start';
import { setHeader } from '@tanstack/react-start/server';
import { auth } from '~/lib/auth';

// import { authClient } from '~/lib/utils/authClient';

export const signIn = createServerFn()
  .validator((d: { email: string; password: string }) => d)
  .handler(async ({ data }) => {
    // TODO: handler error , validation and move to use case
    const response = await auth.api.signInEmail({
      body: data,
      asResponse: true,
    });
    console.log(response);

    setHeader('set-cookie', response.headers.getSetCookie());
    return { status: 200 };
  });

// export const signIn = createServerFn()
// .validator(SignInSchema)
// .handler(async ({ data }) => {
//   const { error } = await getSupabaseServerClient().auth.signInWithPassword({
//     email: data.email,
//     password: data.password,
//   })

//   if (error) {
//     return { error: error.message }
//   }
// })
