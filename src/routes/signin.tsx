import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router';
import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { authClient } from '~/lib/utils/authClient';
// import { authClient } from '~/lib/utils/authClient';
import { signIn } from '~/server/functions/auth/auth.functions';

const REDIRECT_URL = '/';

export const Route = createFileRoute('/signin')({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if (context.user) {
      throw redirect({
        to: REDIRECT_URL,
        search: {
          redirect: location.href || '/',
        },
      });
    }
  },
});

function RouteComponent() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const signInMutation = useMutation({
    mutationFn: (data: Parameters<typeof signIn>[0]) => signIn(data),
    onSuccess: (response) => {
      // if (response?.error) {
      //   // toast.error(response.error);
      //   return;
      // }

      // // authClient.

      // console.log(response?.session);
      console.log({ response });

      queryClient.resetQueries();
      navigate({ to: '/' });
    },
  });

  const handleSignin = async () => {
    await signInMutation.mutateAsync({
      data: {
        email: 'eduardo@gmail.com',
        password: '123456790s',
      },
    });
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center">Welcome back!</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl" onClick={handleSignin} loading={signInMutation.isPending}>
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
