import { GlobalStyle } from './global/styles/Global';

import MyRoutes from './routes';

import { useThemeContext } from './hooks/useThemeContext';
import { TypeThemeContext } from './contexts/GlobalContext';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './global/styles/Theme';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { themeStorage } = useThemeContext() as TypeThemeContext;

  return (
    <ThemeProvider theme={themeStorage ? lightTheme : darkTheme}>
      <GlobalStyle />
      <ToastContainer
        autoClose={3000}
        theme={themeStorage ? 'dark' : 'light'}
      />
      <MyRoutes />
    </ThemeProvider>
  );
}

export default App;
