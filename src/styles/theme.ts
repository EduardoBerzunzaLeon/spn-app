import { Button, createTheme, HoverCard, Menu, Popover, Tooltip } from '@mantine/core';

export const theme = createTheme({
  defaultRadius: 'md',
  cursorType: 'pointer',
  components: {
    HoverCard: HoverCard.extend({
      defaultProps: {
        shadow: 'md',
        withArrow: true,
        arrowSize: 10,
      },
    }),
    Popover: Popover.extend({
      defaultProps: {
        shadow: 'md',
        withArrow: true,
        arrowSize: 10,
      },
    }),
    Menu: Menu.extend({
      defaultProps: {
        shadow: 'md',
        withArrow: true,
        arrowSize: 10,
        arrowPosition: 'center',
      },
    }),
    Tooltip: Tooltip.extend({
      defaultProps: {
        withArrow: true,
        arrowSize: 10,
        color: '#2E2E2E',
      },
    }),
    Button: Button.extend({
      defaultProps: {
        variant: 'light',
        loaderProps: {
          type: 'dots',
        },
      },
    }),
  },
});
