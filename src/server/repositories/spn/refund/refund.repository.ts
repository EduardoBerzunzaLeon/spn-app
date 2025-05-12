import { and, asc, count, desc, eq, SQL } from 'drizzle-orm';
import { PgColumn, PgSelect, PgTable } from 'drizzle-orm/pg-core';
import { db } from '~/server/db';
import { refundLogs, user } from '~/server/db/spn/schema';
import { withPagination } from '~/server/core';

interface PaginateProps {
  limit?: number;
  page?: number;
  orderBy: string;
  order: 'asc' | 'desc';
}

export const getRefundLogs = async ({ limit, page, orderBy, order }: PaginateProps) => {

  const query = db.spn
    .select({
      id: refundLogs.id,
      processFortnight: refundLogs.processFortnight,
      user: user.name,
      createdAt: refundLogs.createdAt,
      rfcCreated: refundLogs.rfcCreated,
      rfcDeletedResponsabilities: refundLogs.rfcDeletedResponsabilities,
      rfcDeletedEmployeeConcept: refundLogs.rfcDeletedEmployeeConcept,
      rfcClosedTerm: refundLogs.rfcClosedTerm,
      rfcSuccesed: refundLogs.rfcSuccesed,
      rfcFailed: refundLogs.rfcFailed,
      hasError: refundLogs.hasError,
      activeBefore: refundLogs.activeBefore,
      activeAfter: refundLogs.activeAfter,
    })
    .from(refundLogs)
    .leftJoin(user, eq(refundLogs.userId, user.id))
    .$dynamic();

  console.log({ orderBy });

  return await withPagination(query, { page, limit, schema: refundLogs, order, orderColumn: orderBy }); 
};
