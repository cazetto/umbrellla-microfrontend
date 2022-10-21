import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import { useMachine } from '@xstate/react';

import {
  Box,
  ForceThemeProvider,
  themePrimer,
  PrimerGlobalStyle,
} from 'force-components';

import sidebarStateMachine from 'state/sidebar-state-machine';

function SideBar() {
  const [sidebarState, changeSidebarState] = useMachine(sidebarStateMachine);
  const sidebarIsCollapsed = sidebarState.matches('collapsed');
  const sidebarWidth = sidebarIsCollapsed ? '60px' : '220px';

  const handleToogle = () => {
    changeSidebarState('TOGGLE');
  };
  return (
    <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
      <Box display='block' bg='colorYellow' width={sidebarWidth}>
        <Box
          color='colorYellow900'
          textAlign='center'
          mt='2'
          onClick={handleToogle}
        >
          {sidebarIsCollapsed ? 'Open' : 'Close'}
        </Box>
      </Box>
    </ForceThemeProvider>
  );
}

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: SideBar,
  renderType: 'createRoot',
  errorBoundary(err, info, props) {
    return <div>This renders when a catastrophic error occurs</div>;
  },
});
