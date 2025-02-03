import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { routes as routesRaw } from '@src/routes';
import SideBarLinkItem from './SideBarLinkItem';
import DarkModeToggle from '@src/components/DarkModeToggle';

export default function SideBarLinkList() {
  const { pathname } = useLocation();

  const routes = useMemo(
    () =>
      routesRaw.map(({ to, text, activeNames }) => ({
        to,
        text,
        isActive: activeNames.some((name) => name === pathname),
      })),
    [pathname],
  );

  return (
    <div className='flex animate-appear flex-col items-start justify-start text-sm font-thin'>
      {routes.map(({ to, text, isActive }) => (
        <SideBarLinkItem key={text} to={to} text={text} isActive={isActive} />
      ))}

      <DarkModeToggle size={20} />
    </div>
  );
}
