// import { toast as toastSonner } from 'sonner';
import { notifications } from '@mantine/notifications';

const error = (message: string) => notifications.show({ title: 'Error', message, color: 'red' });

const success = (message: string) =>
  notifications.show({ title: 'Operación exitosa', message, color: 'teal' });

const warning = (message: string) =>
  notifications.show({ title: 'Advertencia', message, color: 'yellow' });

const info = (message: string) =>
  notifications.show({ title: 'Información', message, color: 'blue' });

export const toast = {
  error,
  success,
  warning,
  info,
};
