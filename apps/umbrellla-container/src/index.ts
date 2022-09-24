import { registerApplication, start } from 'single-spa';

registerApplication(
  'NavigationButton',
  () => import('Navigation/Button') as any,
  (location) => location.pathname.startsWith('/')
);

start();
