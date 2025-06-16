import { createFileRoute, stripSearchParams } from '@tanstack/react-router';
import { Button, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { RefundLogHistoryTable, refundQueries, useRefundAlerts } from '~/features/refund';
import { Alert } from '~/features/ui';
import { DEFAULT_REFUND_SEARCH, RefundSearchSchema } from '~/shared';

export const Route = createFileRoute('/_auth/(concepts)/refund/')({
  component: RouteComponent,
  validateSearch: RefundSearchSchema,
  beforeLoad: async ({ context, search }) => {
    context.queryClient.prefetchQuery(refundQueries.logs({ ...search }));
    context.queryClient.prefetchQuery(refundQueries.lastConsecutive);
    return { crumb: 'Reintegros', iconName: 'concept' };
  },
  search: {
    middlewares: [stripSearchParams(DEFAULT_REFUND_SEARCH)],
  },
  head: () => ({
    meta: [{ title: 'Reintegros | SPN' }],
  }),
});

function RouteComponent() {
  const [loading, { toggle }] = useDisclosure();

  const { hasError, message, hasWarning, messageWarning, isFetching } = useRefundAlerts();

  return (
    <>
      {hasError && (
        <Alert type="error" title="Error en los consecutivos de reintegros">
          {message}
        </Alert>
      )}

      {hasWarning && (
        <Alert type="warning" title="Desfase en los consecutivos de reintegros">
          {messageWarning}
        </Alert>
      )}

      <Group justify="space-between" align="center" mt="md" mb="md">
        <Title order={4}>Historial</Title>
        <Button loading={loading} onClick={toggle} disabled={isFetching || hasError}>
          Verificar consecutivo
        </Button>
      </Group>
      <RefundLogHistoryTable />
    </>
  );
}
