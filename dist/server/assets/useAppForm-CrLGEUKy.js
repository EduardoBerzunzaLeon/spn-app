import { jsx } from "react/jsx-runtime";
import { Button, PasswordInput, TextInput, Textarea } from "@mantine/core";
import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
//#region src/features/form/context/formContext.ts
var { fieldContext, formContext, useFieldContext, useFormContext } = createFormHookContexts();
//#endregion
//#region src/features/form/components/PasswordField.tsx
function PasswordField(props) {
	const field = useFieldContext();
	return /* @__PURE__ */ jsx(PasswordInput, {
		...props,
		id: field.name,
		name: field.name,
		value: field.state.value,
		onBlur: field.handleBlur,
		onChange: (e) => field.handleChange(e.target.value),
		error: field.state.meta.isTouched && field.state.meta.errors.length && field.state.meta.errors[0]?.message
	});
}
//#endregion
//#region src/features/form/components/SubmitButton.tsx
function SubmitButton({ label, isSubmitting, ...rest }) {
	return /* @__PURE__ */ jsx(Button, {
		...rest,
		loading: isSubmitting,
		disabled: isSubmitting,
		type: "submit",
		children: label
	});
}
//#endregion
//#region src/features/form/components/TextField.tsx
function TextField(props) {
	const field = useFieldContext();
	return /* @__PURE__ */ jsx(TextInput, {
		...props,
		id: field.name,
		name: field.name,
		value: field.state.value,
		onBlur: field.handleBlur,
		onChange: (e) => field.handleChange(e.target.value),
		error: field.state.meta.isTouched && field.state.meta.errors.length && field.state.meta.errors[0]?.message
	});
}
//#endregion
//#region src/features/form/components/TextareaField.tsx
function TextareaField(props) {
	const field = useFieldContext();
	return /* @__PURE__ */ jsx(Textarea, {
		...props,
		id: field.name,
		name: field.name,
		value: field.state.value,
		onBlur: field.handleBlur,
		onChange: (e) => field.handleChange(e.target.value),
		error: field.state.meta.isTouched && field.state.meta.errors.length && field.state.meta.errors[0]?.message
	});
}
//#endregion
//#region src/features/form/hooks/useAppForm.ts
var { useAppForm } = createFormHook({
	fieldContext,
	formContext,
	fieldComponents: {
		TextField,
		PasswordField,
		TextareaField
	},
	formComponents: { SubmitButton }
});
var useHandleSubmitForm = (form) => {
	const handleSubmit = (e, meta) => {
		e.preventDefault();
		e.stopPropagation();
		form.handleSubmit(meta);
	};
	return { handleSubmit };
};
//#endregion
export { useHandleSubmitForm as n, useAppForm as t };
