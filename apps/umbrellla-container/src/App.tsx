import * as React from 'react';
// @mf-typescript directory is autogenerated when you start the server
import RemoteButtonType from '../@mf-typescript/Button';

const RemoteButton = React.lazy(
  () => import('Navigation/Button')
) as unknown as typeof RemoteButtonType;

const App = () => (
  <div>
    <h1>Module Federation Typescript</h1>
    <h2>Container App</h2>
    <React.Suspense fallback='Loading Button'>
      <RemoteButton size='large' />
      <br />
      <RemoteButton size='small' />
    </React.Suspense>
  </div>
);

export default App;
