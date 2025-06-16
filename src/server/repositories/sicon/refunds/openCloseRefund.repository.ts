import { desc } from 'drizzle-orm';
import { db } from '~/server/db';
import { reAperturaCierre } from '~/server/db/sicon/schema';

export const getLastConsecutive = async () => {
  return await db.sicon
    .select({
      id: reAperturaCierre.id,
      consecutive: reAperturaCierre.consecutivo,
      fortnight: reAperturaCierre.quincena,
      status: reAperturaCierre.estatus,
    })
    .from(reAperturaCierre)
    .orderBy(desc(reAperturaCierre.quincena), desc(reAperturaCierre.consecutivo))
    .limit(1);
};
