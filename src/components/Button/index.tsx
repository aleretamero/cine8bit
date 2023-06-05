// import { Children } from 'react';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as Styled from './styles';

interface iButton extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  colorPrimary?: string;
  colorSecundary?: string;
}

const Button = ({
  children,
  colorPrimary,
  colorSecundary,
  ...props
}: iButton) => {
  return (
    <Styled.Button
      colorPrimary={colorPrimary}
      colorSecundary={colorSecundary}
      {...props}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
