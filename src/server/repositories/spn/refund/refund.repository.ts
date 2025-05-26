import { eq, getTableColumns, sql } from 'drizzle-orm';
import { withPagination } from '~/server/core';
import { db } from '~/server/db';
import { refundLogs, refundRfcFailed, refundRfcSuccess, user } from '~/server/db/spn/schema';
import { PaginateProps } from '~/shared';

type RfcSuccessType = {
  rfc: string;
  type: string;
  plaza: string;
};

type RfcErrorType = {
  rfc: string;
  type: string;
  error: string;
  plaza: string;
};

export const getRefundLogs = async (props: PaginateProps) => {
  const { userId, ...columns } = getTableColumns(refundLogs);

  const subqueryRfcSuccess = db.spn
    .select({
      rfc: refundRfcSuccess.rfc,
      type: refundRfcSuccess.type,
      plaza: refundRfcSuccess.plaza,
    })
    .from(refundRfcSuccess)
    .where(eq(refundRfcSuccess.refundLogsId, refundLogs.id));

  const subqueryRfcFailed = db.spn
    .select({
      rfc: refundRfcFailed.rfc,
      type: refundRfcFailed.type,
      error: refundRfcFailed.error,
      plaza: refundRfcFailed.plaza,
    })
    .from(refundRfcFailed)
    .where(eq(refundRfcFailed.refundLogsId, refundLogs.id));

  const query = db.spn
    .select({
      ...columns,
      user: {
        id: user.id,
        name: user.name,
      },
      rfcSuccess: sql<RfcSuccessType[]>`(
        SELECT json_agg(row_to_json(subquery))
        FROM (${subqueryRfcSuccess}) AS subquery
      )`.as('rfcSuccess'),
      rfcFailer: sql<RfcErrorType[]>`(
        SELECT json_agg(row_to_json(subquery))
        FROM (${subqueryRfcFailed}) AS subquery
      )`.as('rfcFailer'),
    })
    .from(refundLogs)
    .leftJoin(user, eq(userId, user.id))
    .leftJoin(refundRfcSuccess, eq(refundLogs.id, refundRfcSuccess.refundLogsId))
    .leftJoin(refundRfcFailed, eq(refundLogs.id, refundRfcFailed.refundLogsId))
    .$dynamic();

  return await withPagination(query, {
    ...props,
    schema: refundLogs,
    joinSchemas: {
      user: { schema: user, fieldJoin: user.id, fieldFrom: userId, type: 'leftJoin' },
      rfcSuccess: {
        schema: refundRfcSuccess,
        fieldJoin: refundRfcSuccess.refundLogsId,
        fieldFrom: refundLogs.id,
        type: 'leftJoin',
      },
      rfcFailed: {
        schema: refundRfcFailed,
        fieldJoin: refundRfcFailed.refundLogsId,
        fieldFrom: refundLogs.id,
        type: 'leftJoin',
      },
    },
  });
};
