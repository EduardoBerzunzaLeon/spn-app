import { db } from '~/server/db';
import type { BulkInsertArgs } from '~/server/db/siapsep';

export const createMany = async (args: BulkInsertArgs) => {
  return await db.siapsep.executeBulkInsert({
    table: 'spn_rfc_plaza',
    columns: ['rfc', 'cod_pago', 'unidad', 'subunidad', 'cat_puesto', 'horas', 'cons_plaza'],
    args,
  });
};
