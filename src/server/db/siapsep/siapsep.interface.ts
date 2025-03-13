import odbc from 'odbc';

export interface PrismaConnection<T> {
  get client(): T;
}

export interface OdbcConnection {
  execute: (query: string, args: (string | number)[]) => Promise<odbc.Result<unknown>>;
}
