import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';

type ButtonProps = {
  size: 'small' | 'large';
};

const Button: React.FC<ButtonProps> = ({ size }) => {
  if (size === 'large') {
    return <button>Navigation Large Button</button>;
  }
  return <button>Navigation Small Button</button>;
};

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Button,
  renderType: 'createRoot',
  errorBoundary(err, info, props) {
    return <div>This renders when a catastrophic error occurs</div>;
  },
});
