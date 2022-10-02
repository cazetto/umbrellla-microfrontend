import { registerApplication, start } from 'single-spa';

registerApplication(
  'NavigationTopBar',
  () => import('navigation/TopBar') as any,
  (location) => location.pathname.startsWith('/')
);

registerApplication(
  'ProductsHome',
  () => import('shop/ProductsHome') as any,
  (location) => location.pathname.startsWith('/')
);

start();
