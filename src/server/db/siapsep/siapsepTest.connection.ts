import { open } from 'ibm_db';

// const connStr = "DATABASE=sysmaster;HOSTNAME=localhost;PORT=9088;PROTOCOL=TCPIP;UID=informix;PWD=in4mix;";
const connStr = 'DATABASE=sysmaster;HOST=localhost;SERVICE=9088;PROTOCOL=onsoctcp;UID=informix;PWD=in4mix'
// const connStr ='DSN=siapsep';

export async function main() {
  let conn;

  try {
    conn = await open(connStr);
    console.log("✅ Conectado a Informix");

    const data = await conn.query("SELECT FIRST 1 * FROM systables");
    console.log(data);

  } catch (err) {
    console.error(err);
  } finally {
    if (conn) await conn.close();
  }
}
