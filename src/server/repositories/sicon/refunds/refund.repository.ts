import { and, eq } from 'drizzle-orm';
import { db } from '~/server/db';
import { reEmpleadosCapturados } from '~/server/db/sicon/schema';

export const getCaptureByIdOpenClose = async (idOpenClose: number) => {
  return await db.sicon
    .select({
      id: reEmpleadosCapturados.id,
      rfc: reEmpleadosCapturados.rfc,
      plaza: reEmpleadosCapturados.plaza,
      fortnightStart: reEmpleadosCapturados.quincenaInicioConcepto,
      fortnightEnd: reEmpleadosCapturados.quincenaFinConcepto,
      monthlyAmount: reEmpleadosCapturados.importeMensual,
      biweeklyAmount: reEmpleadosCapturados.importeQuincenal,
      status: reEmpleadosCapturados.estatus,
      fortnight: reEmpleadosCapturados.quincena,
      idUser: reEmpleadosCapturados.idUser,
    })
    .from(reEmpleadosCapturados)
    .where(eq(reEmpleadosCapturados.idAperturaCierre, idOpenClose));
};
