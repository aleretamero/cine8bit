import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      text: string;
    };
  }
}

// import { darkTheme } from './Theme';

// type MyDefaultTheme = typeof darkTheme

// declare module 'styled-components' {
//   export interface DefaultTheme extends MyDefaultTheme {}
// }
