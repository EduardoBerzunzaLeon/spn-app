import { useMemo } from 'react';
import { useChildMatches } from '@tanstack/react-router';
import { LinksGroup } from '../LinksGroup/LinksGroups';
import { getMenuLinks } from '~/utils';

export const SideBarMenu = () => {
  const menuLinks = useMemo(() => getMenuLinks(), []);
  const childMatches = useChildMatches();

  const linksN = useMemo(() => {
    if (childMatches.length === 0) {
      return false;
    }

    const childRoute = childMatches[0].routeId;

    return menuLinks.map((menu) => (
      <LinksGroup
        {...menu}
        key={menu.label}
        initiallyOpened={menu?.matchRoute ? childRoute.includes(menu.matchRoute) : false}
      />
    ));
  }, []);
  return <>{linksN}</>;
};

export default SideBarMenu;
