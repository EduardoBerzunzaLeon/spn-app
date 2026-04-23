import { db } from '~/server/db';

export const deleteByRfc = async (rfcCalculationTable: string) =>
  await db.siapsep.executeSet({
    query: `DELETE FROM responsabilidades where rfc in (select rfc from ${rfcCalculationTable})`,
  });
