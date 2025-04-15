import React, { PropsWithChildren, useState } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';
import { string } from 'better-auth';
import { Box, Collapse, Group, ThemeIcon, UnstyledButton } from '@mantine/core';
import { isFunction } from '../../../../utils/validationTypes/validationTypes';
import { AppLink } from '../AppLink/AppLink';

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  link?: string;
  links?: { label: string; link: string }[];
}

interface LinkSingleProps {
  icon: React.FC<any>;
  label: string;
  className?: string;
}

const LinkSingle = ({ icon: Icon, label, className }: LinkSingleProps) => {
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

interface LinkWrapperProps {
  children: React.ReactNode | ((props: { isActive: boolean }) => React.ReactNode);
  link?: string;
}

const LinkWrapper = ({ link, children }: LinkWrapperProps) => {
  // if (!link) {
  //   return <>{children({ isActive: false })}</>;
  // }

  return (
    <AppLink to={link} underline="never" disabled={!!link}>
      {({ isActive }: { isActive: boolean }) => {
        return isFunction(children) ? children({ isActive }) : children;
      }}
    </AppLink>
  );
};

export const LinksGroup = ({ icon, label, initiallyOpened, links, link }: LinksGroupProps) => {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <AppLink
      className="menu-link"
      to={link.link}
      key={link.label}
      underline="never"
      activeProps={{
        style: {
          fontWeight: 'bold',
        },
      }}
    >
      {link.label}
    </AppLink>
  ));

  return (
    <>
      <LinkWrapper link={link}>
        {({ isActive }) => (
          <>
            <UnstyledButton onClick={() => setOpened((o) => !o)} className={'control'}>
              <Group justify="space-between" gap={0}>
                <LinkSingle icon={icon} label={label} className={isActive ? 'font-bold' : ''} />
                {hasLinks && (
                  <IconChevronRight
                    className={'chevron'}
                    stroke={1.5}
                    size={16}
                    style={{ transform: opened ? 'rotate(-90deg)' : 'none' }}
                  />
                )}
              </Group>
            </UnstyledButton>
          </>
        )}
      </LinkWrapper>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
};
