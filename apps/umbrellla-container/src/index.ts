import { registerApplication, start } from 'single-spa';

registerApplication(
  'NavigationTopBar',
  () => import('navigation/TopBar') as any,
  (location) => location.pathname.startsWith('/')
);

registerApplication(
  'NavigationSideBar',
  () => import('navigation/SideBar') as any,
  (location) => location.pathname.startsWith('/')
);

registerApplication(
  'ProductsHome',
  () => import('shop/ProductsHome') as any,
  (location) => location.pathname.startsWith('/')
);

registerApplication(
  'CartWidget',
  () => import('payments/CartWidget') as any,
  (location) => location.pathname.startsWith('/')
);

start();
