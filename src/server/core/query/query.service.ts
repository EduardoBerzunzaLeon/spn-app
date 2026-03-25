import { AnyColumn, GetColumnData, SQL, sql } from 'drizzle-orm';
import { PgSelect } from 'drizzle-orm/pg-core';

interface GetRelationalColumnProps<G extends PgSelect> {
  subquery: G;
  as: string;
}

export const getRelationalColumn = <G extends PgSelect>({
  subquery,
  as,
}: GetRelationalColumnProps<G>) => {
  return sql<Awaited<typeof subquery>>`(
          SELECT json_agg(row_to_json(subquery))
          FROM (${subquery}) AS subquery
        )`.as(as);
};

export const aliasedColumn = <T extends AnyColumn>(
  column: T,
  alias: string,
): SQL.Aliased<GetColumnData<T>> => {
  return column.getSQL().mapWith(column.mapFromDriverValue).as(alias)
}
