import { forwardRef } from 'react';

import { createLink, type LinkComponent } from '@tanstack/react-router';

import { Spotlight, type SpotlightActionProps } from '@mantine/spotlight';

interface LinkButtonProps
  extends
    SpotlightActionProps,
    Omit<React.ComponentPropsWithoutRef<'a'>, keyof SpotlightActionProps | 'href'> {}

const LinkButton = forwardRef<HTMLButtonElement, LinkButtonProps>((props, ref) => (
  <Spotlight.Action {...props} ref={ref} component="a" />
));

const CreatedButttonLinkComponent = createLink(LinkButton);

export const AppSpotlightLink: LinkComponent<typeof LinkButton> = (props) => (
  <CreatedButttonLinkComponent preload="intent" {...props} />
);
