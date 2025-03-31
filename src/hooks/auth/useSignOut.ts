import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from '@tanstack/react-router';
import { useServerFn } from '@tanstack/react-start';
import { signOut } from '~/server/functions/auth/auth.function';
import { keys } from '~/utils';

export const useSignOut = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    // ServerFn.spn.auth.signOut
    mutationFn: useServerFn(signOut),
    onSuccess: async () => {
      queryClient.resetQueries({ queryKey: [keys.auth.AUTH_USER] });
      await router.invalidate({ sync: true });
      router.navigate({ to: '/signin' });
    },
  });
};
