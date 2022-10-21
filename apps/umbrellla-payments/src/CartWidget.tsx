import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
// import {
//   Box,
//   ForceThemeProvider,
//   themePrimer,
//   PrimerGlobalStyle,
// } from 'force-components';

export function CartWidget() {
  return <></>;
  // return (
  //   <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
  //     <Box
  //       position='fixed'
  //       top='60px'
  //       right='20px'
  //       bg='colorRed'
  //       width='320px'
  //       height='380px'
  //       zIndex='2'
  //     ></Box>
  //   </ForceThemeProvider>
  // );
}

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: CartWidget,
  renderType: 'createRoot',
  errorBoundary(err, info, props) {
    return <div>This renders when a catastrophic error occurs</div>;
  },
});
