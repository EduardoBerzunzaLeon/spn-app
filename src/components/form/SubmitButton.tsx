import { Button, ButtonProps } from '@mantine/core';
import { useFormContext } from '~/utils';

interface Props extends ButtonProps {
  label: string;
}

export function SubscribeButton({ label, ...rest }: Props) {
  const form = useFormContext();
  return (
    <form.Subscribe selector={(formState) => [formState.canSubmit, formState.isSubmitting]}>
      {([canSubmit, isSubmitting]) => (
        <Button {...rest} loading={isSubmitting} disabled={!canSubmit} type="submit">
          {label}
        </Button>
      )}
    </form.Subscribe>
  );
}
