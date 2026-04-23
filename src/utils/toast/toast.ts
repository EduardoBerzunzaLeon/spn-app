import { toast as toastSonner } from 'sonner';

const error = (message: string) => toastSonner.error('Error', { description: message });

const success = (message: string) =>
  toastSonner.success('Operación exitosa', { description: message });

const warning = (message: string) => toastSonner.warning('Advertencia', { description: message });

const info = (message: string) => toastSonner.warning('Información', { description: message });

export const toast = {
  error,
  success,
  warning,
  info,
};
