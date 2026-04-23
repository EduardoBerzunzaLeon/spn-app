import type { RfcCalculationI, RfcCalculationTables } from './rfcCalculation.interface';

import { db } from '~/server/db';

export const getAll = async (table: RfcCalculationTables) =>
  await db.siapsep.execute<RfcCalculationI>({
    query: `SELECT rfc FROM ${table}`,
  });

export const deleteAll = async (table: RfcCalculationTables) =>
  await db.siapsep.executeSet({
    query: `DELETE FROM ${table}`,
  });

export const createMany = async (table: RfcCalculationTables, rfcs: string[][]) =>
  await db.siapsep.executeBulkInsert({
    table,
    columns: ['rfc'],
    args: rfcs,
  });

export const getNotInEmployee = async (table: RfcCalculationTables) =>
  await db.siapsep.execute<RfcCalculationI>({
    query: `SELECT rfc FROM ${table} WHERE rfc NOT IN (SELECT rfc FROM empleado) group by rfc`,
  });

export const deleteNotInEmployee = async (table: RfcCalculationTables) =>
  await db.siapsep.executeSet({
    query: `DELETE FROM ${table} WHERE rfc NOT IN (SELECT rfc FROM empleado)`,
  });
