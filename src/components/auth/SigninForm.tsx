import { useAppForm, useAuth } from '~/hooks';
import { signInFormOptions } from '~/utils';

export const SigninForm = () => {
  const form = useAppForm({
    ...signInFormOptions,
    onSubmit: async ({ value }) => {
      await signInMutation.mutateAsync({ data: value });
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
        <form.SubscribeButton fullWidth mt="xl" label="Iniciar Sesión" />
      </form.AppForm>
    </form>
  );
};
