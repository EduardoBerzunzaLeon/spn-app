import odbc from 'odbc';
import { ExecuteProps, OdbcConnection } from './siapsep.interface';

import 'dotenv/config';

export class SiapsepConnection implements OdbcConnection {
  private connection: odbc.Connection | undefined;

  private async connect() {
    if (this.connection) {
      return;
    }
    this.connection = await odbc.connect(process.env.SIAPSEP_DB_DS!);
  }

  async prepareStatement<T>({ query, args }: ExecuteProps) {
    let statement;

    try {
      await this.connect();

      statement = await this.connection!.createStatement();
      await statement.prepare(query);
      if (args) {
        await statement.bind([...args]);
      }
      const result = await statement.execute<T>();

      return result;
    } catch (error) {
      console.log({ siapsepDb: error });
      throw Error('Error en la conexión del SIAPSEP, favor de verificar el servidor');
    } finally {
      if (statement) {
        try {
          await statement.close();
        } catch {
          throw Error('Error al momento de cerrar la conexion al SIAPSEP');
        }
      }
    }
  }

  async execute<T>(props: ExecuteProps) {
    return await this.prepareStatement<T>(props);
  }

  async executeSingle<T>(props: ExecuteProps) {
    const data = await this.prepareStatement<T>(props);
    return data[0];
  }
}
