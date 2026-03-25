import { t as ErrorApp } from "./errorApp.entity-Dp6qI9Fl.js";
import { n as createMiddleware } from "../server.js";
//#region src/shared/errors/error.ts
var handlerError = (error) => {
	if (error instanceof AggregateError) return ErrorApp.internal("Error en la conexión");
	if (error instanceof ErrorApp) return error;
	return ErrorApp.internal("Ocurrio un error sin manejar, favor de contactar al administrador.");
};
//#endregion
//#region src/lib/middleware/error.middleware.ts
var errorMiddleware = createMiddleware().server(async ({ next }) => {
	try {
		return await next();
	} catch (error) {
		console.log({ errorMiddleware: error });
		throw handlerError(error);
	}
});
//#endregion
export { handlerError as n, errorMiddleware as t };
