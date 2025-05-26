import { MantineReactTable } from 'mantine-react-table';
import { DEFAULT_REFUND_SEARCH, REFUND_LOG_COLUMNS } from '../const';
import { refundQueries } from '../query';
import { useTable } from '~/features/core';
import { Route as RefundRoute } from '~/routes/_auth/(concepts)/refund';

export const RefundLogHistory = () => {
  const { table } = useTable({
    columns: REFUND_LOG_COLUMNS,
    from: RefundRoute.id,
    getData: refundQueries.logs,
    initialState: DEFAULT_REFUND_SEARCH,
  });

  return (
    <>
      <MantineReactTable table={table} />
    </>
  );
};
