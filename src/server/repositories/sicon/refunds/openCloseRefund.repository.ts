import { desc, eq } from 'drizzle-orm';
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

export const updateStatus = async (id: number, status: number) => {
  return await db.sicon
    .update(reAperturaCierre)
    .set({ estatus: status })
    .where(eq(reAperturaCierre.id, id))
    .execute();
};
