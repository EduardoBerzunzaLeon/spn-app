import { eq } from 'drizzle-orm';
import { modulos } from '../../../db/sicon/schema';
import { db } from '~/server/db';

export const getFortnightByModule = async (module: string) => {
  return await db.sicon
    .select({
      id: modulos.id,
      fortnight: modulos.quincena,
      status: modulos.estatus,
      name: modulos.nombre,
    })
    .from(modulos)
    .where(eq(modulos.nombre, module))
    .limit(1);
};
