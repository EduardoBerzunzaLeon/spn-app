import { HoverCard, List, Stack, Title } from '@mantine/core';
import { AppBadge, IconSuccess, IconWrapper } from '~/features/ui';

interface Props {
  status: string | null;
  name: string;
  fortnight: string | null;
}

export const BadgeFortnightSicon = ({ status, name, fortnight }: Props) => {
  return (
    <HoverCard width={280} shadow="md" withArrow arrowSize={10}>
      <HoverCard.Target>
        <AppBadge type="info" size="lg">
          {fortnight}
        </AppBadge>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Stack align="flex-start" justify="center" gap="md">
          <Title order={4}>Quincena en Cargar tablas de SICON</Title>
          <List
            spacing="xs"
            size="sm"
            center
            icon={
              <IconWrapper color="teal" size={24} radius="xl">
                <IconSuccess size={16} />
              </IconWrapper>
            }
          >
            <List.Item>
              Quincena: <span className="font-bold">{fortnight}</span>
            </List.Item>
            <List.Item>
              Estatus: <span className="font-bold">{status}</span>
            </List.Item>
            <List.Item>
              Nombre: <span className="font-bold">{name}</span>
            </List.Item>
          </List>
        </Stack>
      </HoverCard.Dropdown>
    </HoverCard>
  );
};
