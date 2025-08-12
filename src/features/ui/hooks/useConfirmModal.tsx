import { Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { toast } from '~/utils';

interface UseConfirmModal {
  onConfirm: () => void;
  title?: string;
  body?: string;
  cancelAlertText?: string;
  confirmText?: string;
  cancelText?: string;
}

export const useConfirmModal = ({
  onConfirm,
  title,
  body,
  cancelAlertText,
  confirmText,
  cancelText,
}: UseConfirmModal) => {
  const exactTitle = title || 'Por favor confirmar esta acción';
  const exactBody =
    body ||
    'Esta acción es tan importante que se requiere confirmarla. Por favor, haga clic en uno de estos botones para continuar.';
  const exactCancelAlertText = cancelAlertText || 'Petición cancelada';
  const exactConfirmText = confirmText || 'Confirmar';
  const exactCancelText = cancelText || 'Cancelar';

  const openModal = () =>
    modals.openConfirmModal({
      title: exactTitle,
      children: <Text size="sm">{exactBody}</Text>,
      labels: { confirm: exactConfirmText, cancel: exactCancelText },
      onCancel: () => toast.info(exactCancelAlertText),
      onConfirm: () => onConfirm(),
    });

  return openModal;
};
