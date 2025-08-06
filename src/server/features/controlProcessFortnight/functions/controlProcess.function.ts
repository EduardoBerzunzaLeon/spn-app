import { createServerFn } from '@tanstack/react-start';
import { controlProcess } from '../index';

export const getFortnight = createServerFn().handler(async () => {
  // FIXME: VIGILAR SI ESTO OCASIONA ERRORES CON VITE
  return await controlProcess.cases.getSiapsepInitialData();
});
