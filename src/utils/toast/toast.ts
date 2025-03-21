import { notifications } from '@mantine/notifications';

const error = (message: string) => {
  return notifications.show({
    color: 'red',
    title: 'Ocurrio un error',
    message,
  });
};

const success = (message: string) => {
  return notifications.show({
    color: 'green',
    title: 'Operación Exitosa',
    message,
  });
};

const warning = (message: string) => {
  return notifications.show({
    color: 'yellow',
    title: 'Advertencia',
    message,
  });
};

const info = (message: string) => {
  return notifications.show({
    color: 'cyan',
    title: 'Observación',
    message,
  });
};

export const toast = {
  error,
  success,
  warning,
  info,
};
