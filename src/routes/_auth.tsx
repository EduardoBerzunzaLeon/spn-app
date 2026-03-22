import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { controlProcessQueries } from '~/features/controlProcess';
import { controlSiconQueries } from '~/features/controlSicon';
import { AuthLayout, MainHeader } from '~/features/ui';

export const Route = createFileRoute('/_auth')({
  component: DashboardLayout,
  beforeLoad: async ({ context, location }) => {
    if (!context.user) {
      throw redirect({
        to: '/signin',
        search: {
          redirectTo: location.href,
        },
      });
    }

    context.queryClient.prefetchQuery(controlProcessQueries.fortnight());
    context.queryClient.prefetchQuery(controlSiconQueries.fortnight());

    return { crumb: 'Dashboard', iconName: 'home' };
  },
  head: () => ({
    meta: [
      {
        title: 'Dashboard | SPN',
      },
    ],
  }),
});

function DashboardLayout() {
  return (
    <AuthLayout>
      <>
        <MainHeader />
        <Outlet />
      </>
    </AuthLayout>
  );
}
