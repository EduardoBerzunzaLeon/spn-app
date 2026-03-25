import { RefundsLogs } from '../interfaces';
import { Column } from '~/features/core/hooks/useTable';
import { AppBadge } from '~/features/ui';

export const REFUND_LOG_COLUMNS: Column<RefundsLogs>[] = [
  {
    accessorKey: 'consecutive',
    header: 'Consecutivo',
    type: 'number',
  },
  {
    accessorKey: 'processFortnight',
    header: 'Quincena Proceso',
    type: 'number',
  },
  {
    accessorKey: 'createdAt',
    id: 'createdAt',
    header: 'Fecha de creación',
    type: 'date',
  },
  {
    accessorFn: (row: RefundsLogs) => row?.user?.name ?? 'no user',
    id: 'user.name',
    header: 'Usuario',
  },
  {
    accessorKey: 'recordsCreated',
    header: 'RFC Creados',
    type: 'number',
  },
  {
    accessorKey: 'recordsDeletedResponsabilities',
    header: 'RFC Eliminados Responsabilidades',
    type: 'number',
  },
  {
    accessorKey: 'recordsDeletedEmployeeConcept',
    header: 'RFC Eliminados Empleados Concepto',
    type: 'number',
  },
  {
    accessorKey: 'recordsClosedTerm',
    header: 'RFC Cierre Vigencia',
    type: 'number',
  },
  {
    accessorKey: 'recordsSuccesed',
    header: 'RFC Exitosos',
    type: 'number',
  },
  {
    accessorKey: 'recordsFailed',
    header: 'RFC errores',
    type: 'number',
  },
  {
    accessorKey: 'hasError',
    id: 'hasError',
    header: 'Error Status',
    Cell: ({ cell }) => {
      const value = cell.getValue() === 'true' ? 'Error' : 'Sin error';
      const type = cell.getValue() === 'true' ? 'error' : 'success';

      return (
        <AppBadge type={type} size="md">
          {value}
        </AppBadge>
      );
    },
    type: 'boolean',
  },
  {
    accessorKey: 'activeBefore',
    header: 'Activos Antes',
    type: 'number',
  },
  {
    accessorKey: 'activeAfter',
    header: 'Activos Ahora',
    type: 'number',
  },
  {
    accessorKey: 'notes',
    header: 'Notas',
  },
];
