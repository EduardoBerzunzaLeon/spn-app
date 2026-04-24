import odbc from 'odbc';

import type { ExecuteBulkInsertProps, ExecuteProps, OdbcConnection } from './siapsep.interface';

import 'dotenv/config';
import { ErrorApp } from '~/shared';

export class SiapsepConnection implements OdbcConnection {
  private static instance: SiapsepConnection;
  private connection: odbc.Connection | undefined;

  private constructor() {}

  static getInstance() {
    if (!SiapsepConnection.instance) {
      SiapsepConnection.instance = new SiapsepConnection();
    }
    return SiapsepConnection.instance;
  }

  async connect() {
    if (this.connection) {
      return;
    }
    this.connection = await odbc.connect(
      `DSN=${process.env.SIAPSEP_DB_DS};UID=informix;PWD=in4mix`
    );
  }

  async prepareStatement<T>({ query, args }: ExecuteProps) {
    try {
      await this.connect();
      if (args && args.length > 0) {
        let statement;
        try {
          statement = await this.connection!.createStatement();
          await statement.prepare(query);
          await statement.bind([...args]);
          const result = await statement.execute<T>();
          await statement.close();
          return result;
        } catch {
          if (statement) {
            await statement.close();
          }
          throw Error('Error en la conexión del SIAPSEP, favor de verificar el servidor');
        }
      } else {
        return await this.connection!.query<T>(query);
      }
    } catch (error) {
      console.log('Full:', JSON.stringify(error, null, 2));
      throw Error('Error en la conexión del SIAPSEP, favor de verificar el servidor');
    }
  }

  async execute<T>(props: ExecuteProps) {
    return await this.prepareStatement<T>(props);
  }

  async executeSingle<T>(props: ExecuteProps) {
    const data = await this.prepareStatement<T>(props);
    return data[0];
  }

  async executeSet(props: ExecuteProps) {
    const { count } = await this.prepareStatement(props);
    return count;
  }

  // NOTE: ODBC informix not accept rollback and commit
  async executeBulkInsert({ table, columns, args }: ExecuteBulkInsertProps) {
    if (args.length === 0) {
      throw ErrorApp.badRequest('No se encontro información a insertar');
    }

    const columnsList = columns ? `(${columns.join(', ')})` : '';
    let quantity = 0;

    await this.connect();
    // await this.connection!.beginTransaction();

    for (const item of args) {
      if (item.length === 0) {
        throw ErrorApp.badRequest(
          'Se encontro un registro vacio al momento de insertar, favor de verificar la información'
        );
      }
      const values = item
        .map((v) => {
          if (typeof v === 'string') {
            return `'${v}'`;
          }
          return v;
        })
        .join(',');

      const queryString = `INSERT INTO ${table} ${columnsList} VALUES(${values})`;
      await this.connection!.query(queryString);
      quantity++;
    }

    // await this.connection!.commit();

    return quantity;
  }
}
