import { Text } from '@mantine/core';
import { IconEmptySearch } from '../Icons';

interface EmptySearchProps {
  query?: string;
}
export const EmptySearch = ({ query }: EmptySearchProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-0 w-full">
      <IconEmptySearch size={90} stroke={1.5} />
      <Text>
        No se encontraron resultados
        {query && <span className="font-bold"> de "{query}"</span>}
      </Text>
    </div>
  );
};
