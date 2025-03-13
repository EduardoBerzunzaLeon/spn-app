import odbc from 'odbc';
import { OdbcConnection } from './siapsep.interface';

export class SiapsepConnection implements OdbcConnection {
  private connection: odbc.Connection | undefined;

  private async connect() {
    if (this.connection) {
      return;
    }
    this.connection = await odbc.connect('DSN=nomina3');
  }

  async execute(query: string, args: (string | number)[]) {
    await this.connect();
    const statement = await this.connection!.createStatement();
    await statement.prepare(query);
    await statement.bind([...args]);
    const result = await statement.execute();
    await Promise.all([statement.close(), this.connection!.close()]);
    return result;
  }
}
