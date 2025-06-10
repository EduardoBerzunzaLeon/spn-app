import { toast as toastSonner } from 'sonner';
import { notifications } from '@mantine/notifications';

const error = (message: string) => {
  return toastSonner.error('Error', { description: message });
};

const success = (message: string) => {
  return toastSonner.success('Operación exitosa', { description: message });
};

const warning = (message: string) => {
  return toastSonner.warning('Advertencia', { description: message });
};

const info = (message: string) => {
  return toastSonner.warning('Información', { description: message });
};

export const toast = {
  error,
  success,
  warning,
  info,
};
