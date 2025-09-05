import odbc from 'odbc';

export interface PrismaConnection<T> {
  get client(): T;
}

export interface ExecuteProps {
  query: string;
  args?: (string | number)[];
}

export type BulkInsertArgs = (string | number | null)[][];

export interface ExecuteBulkInsertProps {
  table: string;
  columns?: string[];
  args: BulkInsertArgs;
}

export interface OdbcConnection {
  execute: ({ query, args }: ExecuteProps) => Promise<odbc.Result<unknown>>;
  executeSingle: ({ query, args }: ExecuteProps) => Promise<unknown>;
}
