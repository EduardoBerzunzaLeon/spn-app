import { n as useServerFn, t as serverFn } from "./functions-CGs5Ecf0.js";
import { t as LoginSchema } from "./auth.shared.schema-CW0C7FAj.js";
import { n as useHandleSubmitForm, t as useAppForm } from "./useAppForm-CrLGEUKy.js";
import { useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Container, Paper, Title } from "@mantine/core";
import { formOptions } from "@tanstack/react-form";
//#region src/features/auth/hooks/useAuth.ts
var useAuth = () => {
	const router = useRouter();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: useServerFn(serverFn.auth.signIn),
		onSuccess: async () => {
			queryClient.resetQueries();
			await router.invalidate({ sync: true });
		}
	});
};
//#endregion
//#region src/features/auth/form/auth.form.options.ts
var signInFormOptions = formOptions({
	defaultValues: {
		email: "eduardo@gmail.com",
		password: "123456790"
	},
	validators: { onChange: LoginSchema }
});
//#endregion
//#region src/features/auth/components/SignInForm.tsx
var SignInForm = () => {
	const signInMutation = useAuth();
	const form = useAppForm({
		...signInFormOptions,
		onSubmit: ({ value }) => {
			signInMutation.mutate({ data: value });
		}
	});
	const { handleSubmit } = useHandleSubmitForm(form);
	return /* @__PURE__ */ jsxs("form", {
		onSubmit: handleSubmit,
		method: "POST",
		children: [
			/* @__PURE__ */ jsx(form.AppField, {
				name: "email",
				children: (field) => /* @__PURE__ */ jsx(field.TextField, {
					label: "Email",
					placeholder: "you@educacioncampeche.gob",
					required: true
				})
			}),
			/* @__PURE__ */ jsx(form.AppField, {
				name: "password",
				children: (field) => /* @__PURE__ */ jsx(field.PasswordField, {
					label: "Password",
					placeholder: "Tu contraseña",
					required: true,
					mt: "md"
				})
			}),
			/* @__PURE__ */ jsx(form.AppForm, { children: /* @__PURE__ */ jsx(form.SubmitButton, {
				fullWidth: true,
				mt: "xl",
				label: "Iniciar Sesión",
				isSubmitting: signInMutation.isPending
			}) })
		]
	});
};
//#endregion
//#region src/routes/signin.tsx?tsr-split=component
function RouteComponent() {
	return /* @__PURE__ */ jsxs(Container, {
		size: 420,
		my: 40,
		children: [/* @__PURE__ */ jsx(Title, {
			ta: "center",
			children: "Bienvenido"
		}), /* @__PURE__ */ jsx(Paper, {
			withBorder: true,
			shadow: "md",
			p: 30,
			mt: 30,
			radius: "md",
			children: /* @__PURE__ */ jsx(SignInForm, {})
		})]
	});
}
//#endregion
export { RouteComponent as component };
