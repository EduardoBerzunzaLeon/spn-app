import { createFileRoute, Outlet, redirect, useRouter } from '@tanstack/react-router';
import { Button } from '@mantine/core';
import { authClient } from '~/lib/utils/authClient';

export const Route = createFileRoute('/_auth')({
  component: DashboardLayout,
  beforeLoad: async ({ context, location }) => {
    if (!context.user) {
      throw redirect({
        to: '/signin',
        search: {
          redirect: location.href,
        },
      });
    }

    // `context.queryClient` is also available in our loaders
    // https://tanstack.com/start/latest/docs/framework/react/examples/start-basic-react-query
    // https://tanstack.com/router/latest/docs/framework/react/guide/external-data-loading
  },
});

function DashboardLayout() {
  const { queryClient } = Route.useRouteContext();
  // const { user } = Route.useLoaderData();

  // const { user } = Route.useRouteContext();
  const router = useRouter();

  // console.log({ user });

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-4xl font-bold">Dashboard Layout</h1>
      <div className="flex items-center gap-2">
        This is a protected layout:
        <pre className="rounded-md border bg-card p-1 text-card-foreground">
          routes/dashboard/route.tsx
        </pre>
      </div>

      <Button
        onClick={async () => {
          await authClient.signOut();
          await queryClient.invalidateQueries({ queryKey: ['user'] });
          await router.invalidate();
        }}
        type="button"
        className="w-fit"
        size="lg"
      >
        sign out
      </Button>

      <Outlet />
    </div>
  );
}
