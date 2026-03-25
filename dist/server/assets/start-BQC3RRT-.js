import { n as getRequest, s as setResponseStatus } from "./server-TExfUSdF.js";
import { n as createMiddleware, t as createStart } from "../server.js";
import { t as auth } from "./auth-C7-WrATw.js";
import { t as errorMiddleware } from "./error.middleware-BWDQc52T.js";
//#region src/lib/middleware/auth.middleware.ts
var authMiddleware = createMiddleware().server(async ({ next }) => {
	try {
		const request = getRequest();
		if (!request) {
			setResponseStatus(500);
			throw new Error("Internal server error");
		}
		const { headers } = request;
		return next({ context: { user: (await auth.api.getSession({
			headers,
			query: { disableCookieCache: true }
		}))?.user } });
	} catch (error) {
		throw error;
	}
});
//#endregion
//#region src/start.ts
var startInstance = createStart(() => {
	return { requestMiddleware: [authMiddleware, errorMiddleware] };
});
//#endregion
export { startInstance };
