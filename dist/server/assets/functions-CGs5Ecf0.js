import { n as __exportAll } from "./errorApp.entity-Dp6qI9Fl.js";
import { a as getServerFnById, i as TSS_SERVER_FUNCTION, r as createServerFn } from "../server.js";
import { t as LoginSchema } from "./auth.shared.schema-CW0C7FAj.js";
import { n as RefundUpdateNotesSchema, t as RefundSearchSchema } from "./refund.shared.schema-CT71zQRm.js";
import { t as errorMiddleware } from "./error.middleware-BWDQc52T.js";
import * as React from "react";
import { isRedirect, useRouter } from "@tanstack/react-router";
//#region node_modules/@tanstack/react-start/dist/esm/useServerFn.js
function useServerFn(serverFn) {
	const router = useRouter();
	return React.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.state;
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/createSsrRpc.js
var createSsrRpc = (functionId, importer) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (importer ? await importer() : await getServerFnById(functionId))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/server/features/auth/functions/auth.function.ts
var signIn = createServerFn({ method: "POST" }).middleware([errorMiddleware]).inputValidator(LoginSchema).handler(createSsrRpc("f8d535519569a9ec7e735097c04696d584ca02e691ed365605a4d5bff35ed27f"));
var signOut = createServerFn({ method: "POST" }).handler(createSsrRpc("13639b2760296bf3dd7de71d0465dda1b8461d6f69bfc3603c3d2f023b6976f3"));
var getUser = createServerFn({ method: "GET" }).handler(createSsrRpc("c56c5704cde910a8eb2d26e6ec0eb1ce447b3ff496628b3eeffec54ce975098b"));
//#endregion
//#region src/server/features/auth/functions/index.ts
var functions_exports$3 = /* @__PURE__ */ __exportAll({
	getUser: () => getUser,
	signIn: () => signIn,
	signOut: () => signOut
});
//#endregion
//#region src/server/features/controlProcessFortnight/functions/controlProcess.function.ts
var getFortnight$1 = createServerFn().handler(createSsrRpc("32e51a59ba45284eb7fdc7555efdd3b3374df962c64243cf7337da84efcc32db"));
//#endregion
//#region src/server/features/controlProcessFortnight/functions/index.ts
var functions_exports$2 = /* @__PURE__ */ __exportAll({ getFortnight: () => getFortnight$1 });
//#endregion
//#region src/server/features/controlSicon/functions/controlSicon.function.ts
var getFortnight = createServerFn().handler(createSsrRpc("3b2f808cb31c33735e405f573415b14880af48069869fd42ec188b606ef5aebf"));
//#endregion
//#region src/server/features/controlSicon/functions/index.ts
var functions_exports$1 = /* @__PURE__ */ __exportAll({ getFortnight: () => getFortnight });
//#endregion
//#region src/server/features/refund/functions/refund.function.ts
var getLogs = createServerFn().inputValidator(RefundSearchSchema).handler(createSsrRpc("3a8b046a6b17237c61fe51b6b1b4dce61a449372089e3643605340d29c18d370"));
var updateNotes = createServerFn().middleware([errorMiddleware]).inputValidator(RefundUpdateNotesSchema).handler(createSsrRpc("bb40340065fda55edc82e4ac76875189a8789a2af5fad102d8f7fc851a57cc37"));
var generateConsecutive = createServerFn().middleware([errorMiddleware]).handler(createSsrRpc("053d4dc288a73d579e943aa393aafd874b31093f1ef6fbf9fc37b71d6dd9c3b8"));
var getLastConsecutive = createServerFn().handler(createSsrRpc("843602d617c198d99329114f6ac1f0f1511860d8a22c3c7e3370bf592f646853"));
//#endregion
//#region src/server/features/refund/functions/index.ts
var functions_exports = /* @__PURE__ */ __exportAll({
	generateConsecutive: () => generateConsecutive,
	getLastConsecutive: () => getLastConsecutive,
	getLogs: () => getLogs,
	updateNotes: () => updateNotes
});
//#endregion
//#region src/server/functions/index.ts
var serverFn = {
	auth: { ...functions_exports$3 },
	controlProcess: { ...functions_exports$2 },
	controlSicon: { ...functions_exports$1 },
	refund: { ...functions_exports }
};
//#endregion
export { useServerFn as n, serverFn as t };
