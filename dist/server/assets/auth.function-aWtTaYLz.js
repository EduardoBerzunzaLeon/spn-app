import { n as __exportAll, t as ErrorApp } from "./errorApp.entity-Dp6qI9Fl.js";
import { n as getRequest, o as setResponseHeaders, r as getRequestHeaders } from "./server-TExfUSdF.js";
import { r as createServerFn } from "../server.js";
import { t as auth$1 } from "./auth-C7-WrATw.js";
import { t as LoginSchema } from "./auth.shared.schema-CW0C7FAj.js";
import { t as errorMiddleware } from "./error.middleware-BWDQc52T.js";
import { t as createServerRpc } from "./createServerRpc-CmabSksO.js";
//#region src/server/features/auth/useCases/signin.case.ts
var signIn$1 = async (data) => {
	return await auth$1.api.signInEmail({
		body: data,
		asResponse: true
	});
};
//#endregion
//#region src/server/features/auth/useCases/signout.case.ts
var signOut$1 = async (headers) => {
	return await auth$1.api.signOut({
		headers,
		asResponse: true,
		returnHeaders: true
	});
};
//#endregion
//#region src/server/features/auth/index.ts
var auth = { cases: /* @__PURE__ */ __exportAll({
	signIn: () => signIn$1,
	signOut: () => signOut$1
}) };
//#endregion
//#region src/server/features/auth/functions/auth.function.ts?tss-serverfn-split
var signIn_createServerFn_handler = createServerRpc({
	id: "f8d535519569a9ec7e735097c04696d584ca02e691ed365605a4d5bff35ed27f",
	name: "signIn",
	filename: "src/server/features/auth/functions/auth.function.ts"
}, (opts) => signIn.__executeServer(opts));
var signIn = createServerFn({ method: "POST" }).middleware([errorMiddleware]).inputValidator(LoginSchema).handler(signIn_createServerFn_handler, async ({ data }) => {
	const response = await auth.cases.signIn(data);
	const headers = new Headers();
	response.headers.getSetCookie().forEach((cookie) => {
		headers.append("set-cookie", cookie);
	});
	setResponseHeaders(headers);
	if (response.status !== 200) throw ErrorApp.badRequest("Credenciales Incorrectas");
});
var signOut_createServerFn_handler = createServerRpc({
	id: "13639b2760296bf3dd7de71d0465dda1b8461d6f69bfc3603c3d2f023b6976f3",
	name: "signOut",
	filename: "src/server/features/auth/functions/auth.function.ts"
}, (opts) => signOut.__executeServer(opts));
var signOut = createServerFn({ method: "POST" }).handler(signOut_createServerFn_handler, async () => {
	const request = getRequest();
	if (!request?.headers) throw new Error("No se encontró la sesión");
	const response = await auth.cases.signOut(request?.headers);
	const headers = new Headers();
	response.headers.getSetCookie().forEach((cookie) => {
		headers.append("set-cookie", cookie);
	});
	setResponseHeaders(headers);
	if (!response.ok) throw new Error("Ocurrio un error al momento de cerrar la sesión");
});
var getUser_createServerFn_handler = createServerRpc({
	id: "c56c5704cde910a8eb2d26e6ec0eb1ce447b3ff496628b3eeffec54ce975098b",
	name: "getUser",
	filename: "src/server/features/auth/functions/auth.function.ts"
}, (opts) => getUser.__executeServer(opts));
var getUser = createServerFn({ method: "GET" }).handler(getUser_createServerFn_handler, async () => {
	try {
		const headers = getRequestHeaders();
		const session = await auth$1.api.getSession({ headers });
		if (!session) throw new Error("Unauthorized");
		return session;
	} catch (error) {
		return null;
	}
});
//#endregion
export { getUser_createServerFn_handler, signIn_createServerFn_handler, signOut_createServerFn_handler };
