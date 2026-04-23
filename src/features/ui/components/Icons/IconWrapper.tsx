import { ThemeIcon, type ThemeIconProps } from '@mantine/core';

interface Props extends ThemeIconProps {}

export const IconWrapper = (props: Props) => <ThemeIcon {...props} size={24} radius="xl" />;
