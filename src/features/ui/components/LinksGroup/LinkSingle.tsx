import { Box, ThemeIcon } from '@mantine/core';

interface LinkSingleProps {
  icon: React.FC<any>;
  label: string;
  className?: string;
}

export const LinkSingle = ({ icon: Icon, label, className }: LinkSingleProps) => {
  return (
    <Box style={{ display: 'flex', alignItems: 'center' }}>
      <ThemeIcon variant="light" size={30}>
        <Icon size={18} />
      </ThemeIcon>
      <Box ml="md" className={className}>
        {label}
      </Box>
    </Box>
  );
};
