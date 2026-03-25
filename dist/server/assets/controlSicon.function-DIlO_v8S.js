import { n as __exportAll } from "./errorApp.entity-Dp6qI9Fl.js";
import { r as createServerFn } from "../server.js";
import { t as repository } from "./repositories-DZX3SP4X.js";
import { t as createServerRpc } from "./createServerRpc-CmabSksO.js";
//#region src/server/features/controlSicon/useCases/getFortnightByModule.case.ts
var getErrorResponse = (error) => ({
	online: false,
	error,
	module: {
		id: 0,
		fortnight: "",
		status: "",
		name: ""
	}
});
var getFortnightByModule = async (moduleName = "cargar_tablas") => {
	try {
		const siconModule = await repository.sicon.modules.getFortnightByModule(moduleName);
		if (siconModule.length === 0) return getErrorResponse(`No se encontro el módulo de ${moduleName.replace("_", " ")}`);
		return {
			online: true,
			error: "",
			module: { ...siconModule[0] }
		};
	} catch (error) {
		console.log({ errorSicon: error });
		return getErrorResponse("Servidor no accesible");
	}
};
//#endregion
//#region src/server/features/controlSicon/index.ts
var controlSicon = { cases: /* @__PURE__ */ __exportAll({ getFortnightByModule: () => getFortnightByModule }) };
//#endregion
//#region src/server/features/controlSicon/functions/controlSicon.function.ts?tss-serverfn-split
var getFortnight_createServerFn_handler = createServerRpc({
	id: "3b2f808cb31c33735e405f573415b14880af48069869fd42ec188b606ef5aebf",
	name: "getFortnight",
	filename: "src/server/features/controlSicon/functions/controlSicon.function.ts"
}, (opts) => getFortnight.__executeServer(opts));
var getFortnight = createServerFn().handler(getFortnight_createServerFn_handler, async () => {
	return await controlSicon.cases.getFortnightByModule();
});
//#endregion
export { getFortnight_createServerFn_handler };
