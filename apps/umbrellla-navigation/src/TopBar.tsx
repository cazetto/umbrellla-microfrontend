import React, { useEffect } from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import {
  Box,
  Text,
  ForceThemeProvider,
  themePrimer,
  PrimerGlobalStyle,
} from 'force-components';
import state from 'state/state';

function TopBar() {
  useEffect(() => {
    console.log('TopBar - mount:', state.getData().wat);
    setTimeout(() => {
      state.setData({ wat: 2 });
      console.log('TopBar - wat data changed to:', state.getData().wat);
    }, 1002);
  }, []);

  const handleOpen = () => {
    console.log('handleOpen');
  };
  return (
    <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
      <Box
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        bg='colorPurple900'
        px='3'
      >
        <Box display='flex' alignItems='center'>
          <Text color='colorBlue100' fontSize='lg'>
            ☂️
          </Text>
          <Text color='colorBlue100' fontSize='md' ml='2'>
            Umbrellla Microfrontend
          </Text>
        </Box>
        <Box
          as='button'
          color='colorBlue100'
          bg='colorPurple900'
          fontSize='xl'
          my='3'
          borderWidth='0'
          onClick={handleOpen}
        >
          ☰
        </Box>
      </Box>
    </ForceThemeProvider>
  );
}

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: TopBar,
  renderType: 'createRoot',
  errorBoundary(err, info, props) {
    return <div>This renders when a catastrophic error occurs</div>;
  },
});
