import odbc from 'odbc';
import { ExecuteBulkInsertProps, ExecuteProps, OdbcConnection } from './siapsep.interface';

import 'dotenv/config';

import { ErrorApp } from '~/shared';

export class SiapsepConnection implements OdbcConnection {
  private static instance: SiapsepConnection;
  private connection: odbc.Connection | undefined;

  private constructor() { }

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
    this.connection = await odbc.connect(`DSN=${process.env.SIAPSEP_DB_DS}`);
    // this.connection = await odbc.connect(process.env.SIAPSEP_DB_DS!);
  }

  async prepareStatement<T>({ query, args }: ExecuteProps) {
    try {
      await this.connect();

      // Usa .query() directamente en lugar de createStatement
      // Esto es más simple y evita problemas de statements abiertos
      if (args && args.length > 0) {
        // Si hay parámetros, necesitamos bind (aunque Informix tiene limitaciones)
        let statement;
        try {
          statement = await this.connection!.createStatement();
          await statement.prepare(query);
          await statement.bind([...args]);
          const result = await statement.execute<T>();
          await statement.close();
          return result;
        } catch (error) {
          if (statement) {
            try {
              await statement.close();
            } catch {
              // Ignorar error de cierre
            }
          }
           throw Error('Error en la conexión del SIAPSEP, favor de verificar el servidor');
        }
      } else {
        // Sin parámetros: usa query() directamente
        // Esto es mucho más confiable para DELETEs simples
        return await this.connection!.query<T>(query);
      }
    } catch (error) {
      console.log({ siapsepDb: error, query});
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

    try {
      await this.connect();
      await this.connection!.beginTransaction();

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
        quantity += 1;
      }

      return quantity;
    } catch (error) {
      throw error;
    }
  }
}
