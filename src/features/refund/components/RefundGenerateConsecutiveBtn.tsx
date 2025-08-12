import { Button } from '@mantine/core';
import { useRefundAlerts } from '../hooks';
import { useRefundGenerateConsecutive } from '../hooks/useRefundGenerateConsecutive';
import { IconUpload, useConfirmModal } from '~/features/ui';

export const RefundGenerateConsecutiveBtn = () => {
  const { isFetching, hasError, hasInfo } = useRefundAlerts();
  const generateConsecutive = useRefundGenerateConsecutive();

  const isDisabled = isFetching || hasError || hasInfo;
  const openModal = useConfirmModal({
    onConfirm: () => generateConsecutive.mutate({}),
    cancelAlertText: 'Generación cancelada',
  });

  return (
    <Button
      disabled={isDisabled}
      leftSection={<IconUpload />}
      onClick={openModal}
      loading={generateConsecutive.isPending}
    >
      Cargar consecutivo
    </Button>
  );
};
