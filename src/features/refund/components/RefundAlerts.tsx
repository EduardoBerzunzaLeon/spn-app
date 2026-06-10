import { Stack } from '@mantine/core';

import { useRefundAlerts } from '~/features/refund';
import { Alert, Skeleton } from '~/features/ui';

export const RefundAlerts = () => {
  const { hasError, message, hasWarning, messageWarning, hasInfo, messageInfo, isFetching } =
    useRefundAlerts();

  if (isFetching) return <Skeleton height={80} radius="md" />;

  return (
    <Stack>
      {hasInfo && (
        <Alert type="info" title="Los consecutivos de reintegros estan sincronizados">
          {messageInfo}
        </Alert>
      )}

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
    </Stack>
  );
};
