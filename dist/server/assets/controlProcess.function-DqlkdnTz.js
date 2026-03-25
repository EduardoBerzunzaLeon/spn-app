import { r as createServerFn } from "../server.js";
import { t as controlProcess } from "./controlProcessFortnight-UPthPq9I.js";
import { t as createServerRpc } from "./createServerRpc-CmabSksO.js";
//#region src/server/features/controlProcessFortnight/functions/controlProcess.function.ts?tss-serverfn-split
var getFortnight_createServerFn_handler = createServerRpc({
	id: "32e51a59ba45284eb7fdc7555efdd3b3374df962c64243cf7337da84efcc32db",
	name: "getFortnight",
	filename: "src/server/features/controlProcessFortnight/functions/controlProcess.function.ts"
}, (opts) => getFortnight.__executeServer(opts));
var getFortnight = createServerFn().handler(getFortnight_createServerFn_handler, async () => {
	return await controlProcess.cases.getSiapsepInitialData();
});
//#endregion
export { getFortnight_createServerFn_handler };
