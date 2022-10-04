import React, { useEffect } from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import {
  Box,
  ForceThemeProvider,
  themePrimer,
  PrimerGlobalStyle,
} from 'force-components';

import state from 'state/state';

export function ProductsHome() {
  useEffect(() => {
    console.log('ProductsHome - mount: ', state.getData().wat);
    setInterval(() => {
      console.log('ProductsHome - interval: ', state.getData().wat);
    }, 1000);
  }, []);
  return (
    <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
      <Box display='block' width='100%'>
        <Box bg='colorBlue100' height='282px'></Box>
        <Box bg='colorBlue200' height='282px'></Box>
        <Box bg='colorBlue300' height='282px'></Box>
      </Box>
    </ForceThemeProvider>
  );
}

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: ProductsHome,
  renderType: 'createRoot',
  errorBoundary(err, info, props) {
    return <div>This renders when a catastrophic error occurs</div>;
  },
});
