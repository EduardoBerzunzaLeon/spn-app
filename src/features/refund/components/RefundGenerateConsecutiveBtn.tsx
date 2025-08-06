import { Button } from '@mantine/core';
import { useRefundAlerts } from '../hooks';
import { useRefundGenerateConsecutive } from '../hooks/useRefundGenerateConsecutive';
import { IconUpload } from '~/features/ui';

export const RefundGenerateConsecutiveBtn = () => {
  const { isFetching, hasError, hasInfo } = useRefundAlerts();
  const generateConsecutive = useRefundGenerateConsecutive();

  const isDisabled = isFetching || hasError || hasInfo;

  const handleClick = () => {
    generateConsecutive.mutate({});
  };

  return (
    <Button
      disabled={isDisabled}
      leftSection={<IconUpload />}
      onClick={handleClick}
      loading={generateConsecutive.isPending}
    >
      Cargar consecutivo
    </Button>
  );
};
