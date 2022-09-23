import * as React from 'react';

type ButtonProps = {
  size: 'small' | 'large';
};
const Button: React.FC<ButtonProps> = ({ size }) => {
  if (size === 'large') {
    return <button>Navigation Large Button</button>;
  }
  return <button>Navigation Small Button</button>;
};

export default Button;
