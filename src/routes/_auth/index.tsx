import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = Route.useRouteContext();

  return (
    <div>
      Hello <span className="font-bold">{user.name}</span>
    </div>
  );
}
