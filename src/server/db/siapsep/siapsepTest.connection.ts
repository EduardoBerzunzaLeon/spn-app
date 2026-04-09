// import { openSync } from "ibm_db";

// const connStr = "DATABASE=nomina_cam;HOSTNAME=localhost;PORT=9088;PROTOCOL=onsoctcp;UID=informix;PWD=in4mix";

// export const connectionTest = async () => {

//     try {
//       const option = { connectTimeout : 40, systemNaming : true };// Connection Timeout after 40 seconds.
//     //   console.log(ibmdb);
//       const conn = openSync(connStr, option);

//     //   conn.query("select * from prueba_odbc", function (err, rows) {
// 	// 	if (err) {
//     //         console.log('error desde connection test');
// 	// 		console.log(err);
// 	// 	} else {
// 	// 	  console.log(rows);
// 	// 	}
// 	// 	conn.close();
//     //   });
//     } catch (e) {
//         console.log('error  general desde connection test');
//       console.log(e);
//     }

// }