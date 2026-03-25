import * as v from "valibot";
//#region src/shared/auth/auth.shared.schema.ts
var LoginSchema = v.object({
	email: v.pipe(v.string("Tu correo deben ser caracteres"), v.nonEmpty("El correo es obligatorio"), v.email("Favor de introducir un correo valido")),
	password: v.pipe(v.string("Tu contraseña debe ser caracteres"), v.nonEmpty("La contraseña es obligatoria"), v.minLength(8, "La contraseña debe ser mayor o igual de 8 caracteres"))
});
//#endregion
export { LoginSchema as t };
