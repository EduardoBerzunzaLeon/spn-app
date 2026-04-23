import type { EmployeePaymentCodeI } from './employeePaymentCode.interface';

import { db, db } from '~/server/db';

export const getManyByRFC = async (rfc: string) =>
  await db.siapsep.execute<EmployeePaymentCodeI>({
    query: 'SELECT * FROM emp_plaza where rfc = ?',
    args: [rfc],
  });
