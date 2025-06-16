import { signInFormOptions } from '../form';
import { useAuth } from '../hooks';
import { useAppForm, useHandleSubmitForm } from '~/features/form';

export const SignInForm = () => {
  const signInMutation = useAuth();

  const form = useAppForm({
    ...signInFormOptions,
    onSubmit: ({ value }) => {
      signInMutation.mutate({ data: value });
    },
  });

  const { handleSubmit } = useHandleSubmitForm(form);

  return (
    <form onSubmit={handleSubmit} method="POST">
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
