import { eq } from 'drizzle-orm';

import { db } from '~/server/db';
import { modulos } from '~/server/db/sicon/schema';

export const getFortnightByModule = async (module: string) =>
  await db.sicon
    .select({
      id: modulos.id,
      fortnight: modulos.quincena,
      status: modulos.estatus,
      name: modulos.nombre,
    })
    .from(modulos)
    .where(eq(modulos.nombre, module))
    .limit(1);
