import React from 'react';
import {
  themePrimer,
  PrimerGlobalStyle,
  ForceThemeProvider,
  Box,
  Button,
  Text,
} from 'force-components';

const GlobalStyle = <PrimerGlobalStyle />;

export default function Root(props) {
  return (
    <ForceThemeProvider theme={themePrimer} globalStyle={GlobalStyle}>
      <Box
        display="flex"
        bg="colorGray200"
        height="50vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        px="4"
      >
        <Button variant="primary" mx="2" as="a" href="/">
          Shop
        </Button>
        <Button variant="secondary" mx="2" as="a" href="/checkout">
          Payment
        </Button>
      </Box>
    </ForceThemeProvider>
  );
}
