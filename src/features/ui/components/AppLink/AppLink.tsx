import { forwardRef } from 'react';

import { createLink, type LinkComponent } from '@tanstack/react-router';

import { Anchor, type AnchorProps } from '@mantine/core';

interface MantineAnchorProps extends Omit<AnchorProps, 'href'> {
  // Add any additional props you want to pass to the anchor
}

const MantineLinkComponent = forwardRef<HTMLAnchorElement, MantineAnchorProps>((props, ref) => (
  <Anchor ref={ref} {...props} />
));

const CreatedLinkComponent = createLink(MantineLinkComponent);

export const AppLink: LinkComponent<typeof MantineLinkComponent> = (props) => (
  <CreatedLinkComponent preload="intent" {...props} />
);
