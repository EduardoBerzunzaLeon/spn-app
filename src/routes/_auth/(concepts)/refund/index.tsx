import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/(concepts)/refund/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_auth/refund/"!</div>;
}
