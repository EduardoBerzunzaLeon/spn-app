import { Stack } from '@mantine/core';
import { useRefundAlerts } from '~/features/refund';
import { Alert } from '~/features/ui';

export const RefundAlerts = () => {
  const { hasError, message, hasWarning, messageWarning } = useRefundAlerts();

  return (
    <Stack>
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
