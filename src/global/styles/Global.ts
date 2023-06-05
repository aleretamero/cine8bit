import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: inherit;
}

ul, ol {
  list-style: none;
}

body {
  font-family: Ubuntu, sans-serif;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
}

`;
