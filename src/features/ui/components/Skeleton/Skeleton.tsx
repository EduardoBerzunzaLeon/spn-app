import {
  Skeleton as SkeletonMantine,
  type SkeletonProps as SkeletonMantineProps,
} from '@mantine/core';

interface SkeletonProps extends SkeletonMantineProps {}

export const Skeleton = (props: SkeletonProps) => <SkeletonMantine {...props} />;
