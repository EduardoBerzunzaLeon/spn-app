import { forwardRef } from 'react';
import { createLink, LinkComponent } from '@tanstack/react-router';
import { Button, ButtonProps } from '@mantine/core';

interface LinkButtonProps
  extends ButtonProps,
    Omit<React.ComponentPropsWithoutRef<'a'>, keyof ButtonProps | 'href'> {}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>((props, ref) => (
  <Button {...props} ref={ref} component="a" />
));

const CreatedButttonLinkComponent = createLink(LinkButton);

export const AppButtonLink: LinkComponent<typeof LinkButton> = (props) => {
  return <CreatedButttonLinkComponent preload="intent" {...props} />;
};
