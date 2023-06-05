import styled from 'styled-components';

type props = {
  colorPrimary?: string;
  colorSecundary?: string;
};

export const Button = styled.button<props>`
  padding: 0.8rem 1.6rem;
  display: flex;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  border-radius: 10px;
  border: 0px;
  font-family: Ubuntu, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px ${props => props.colorSecundary ?? '#888'};
  background: linear-gradient(
    45deg,
    ${props => props.colorPrimary ?? '#000'} 0%,
    ${props => props.colorSecundary ?? '#888'} 51%,
    ${props => props.colorPrimary ?? '#000'} 100%
  );
  background-size: 200% auto;
  cursor: pointer;
  touch-action: manipulation;
  transition: 0.5s;

  &:hover {
    background-position: right center;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
    padding: 0.6rem 1.2rem;
  }
`;
