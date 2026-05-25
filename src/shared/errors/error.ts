import { ErrorApp } from './errorApp.entity';

import { logger } from '~/lib/utils/logger';

export const handlerError = (error: unknown) => {
  if (error instanceof ErrorApp) {
    return error;
  }

  if (error instanceof AggregateError) {
    logger.error('Fallo crítico de conexión (ODBC/Informix):', error);
    return ErrorApp.internal('El servicio de base de datos no está disponible temporalmente.');
  }

  if (error instanceof Error) {
    if ('status' in error && typeof error.status === 'number') {
      return new ErrorApp(error.message, error.status);
    }

    logger.error('Error de ejecución no manejado:', {
      message: error.message,
      stack: error.stack,
    });

    return ErrorApp.internal(`Error interno: ${error.message}`);
  }

  logger.error('Error de tipo desconocido arrojado:', error);
  return ErrorApp.internal('Ocurrió un error inesperado en el servidor.');
};
