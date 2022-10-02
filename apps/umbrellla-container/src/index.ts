import { registerApplication, start } from 'single-spa';

registerApplication(
  'NavigationButton',
  () => import('navigation/TopBar') as any,
  (location) => location.pathname.startsWith('/')
);

start();
