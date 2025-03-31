import { useAppForm, useAuth } from '~/hooks';
import { signInFormOptions } from '~/utils';

export const SigninForm = () => {
  const form = useAppForm({
    ...signInFormOptions,
    onSubmit: ({ value }) => {
      signInMutation.mutate({ data: value });
    },
  });

  const signInMutation = useAuth();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      method="post"
    >
      <form.AppField name="email">
        {(field) => (
          <field.TextField label="Email" placeholder="you@educacioncampeche.gob" required />
        )}
      </form.AppField>
      <form.AppField name="password">
        {(field) => (
          <field.PasswordField label="Password" placeholder="Tu contraseña" required mt="md" />
        )}
      </form.AppField>
      <form.AppForm>
        <form.SubmitButton
          fullWidth
          mt="xl"
          label="Iniciar Sesión"
          isSubmitting={signInMutation.isPending}
        />
      </form.AppForm>
    </form>
  );
};
