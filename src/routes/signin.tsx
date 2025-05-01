import { createFileRoute, redirect } from '@tanstack/react-router';
import { Container, Paper, Title } from '@mantine/core';
import { SignInForm } from '~/features/auth';
import { RedirectSearchSchema } from '~/shared';

const REDIRECT_URL = '/';

export const Route = createFileRoute('/signin')({
  component: RouteComponent,
  validateSearch: RedirectSearchSchema,
  beforeLoad: async ({ context, search }) => {
    const { redirectTo } = search;
    const to = redirectTo 
      ? `${REDIRECT_URL}${redirectTo}` 
      : REDIRECT_URL;
    
    if (context.user) {
      throw redirect({ to });
    }
  },
});

function RouteComponent() {
  return (
    <Container size={420} my={40}>
      <Title ta="center">Bienvenido</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <SignInForm />
      </Paper>
    </Container>
  );
}
