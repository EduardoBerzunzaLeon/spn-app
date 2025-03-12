import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@mantine/core';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      <Button variant="filled">It's my first button</Button>
    </div>
  );
}
