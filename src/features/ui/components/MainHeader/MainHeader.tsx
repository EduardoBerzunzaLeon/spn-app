import { useRouterState } from '@tanstack/react-router';
import { Group, Title } from '@mantine/core';
import BreadCrumbs from './BreadCrumbs';

export const MainHeader = () => {
  const matches = useRouterState({ select: (s) => s.matches }).filter(
    (match) => match.__beforeLoadContext?.crumb
  );

  const title = matches[matches.length - 1].context.crumb;

  return (
    <Group justify="space-between">
      <Title order={3} textWrap="balance">
        {title}
      </Title>
      <BreadCrumbs crumbs={matches} />
    </Group>
  );
};
