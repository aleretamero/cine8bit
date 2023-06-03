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
    <ThemeProvider theme={themeStorage ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ToastContainer
        autoClose={3000}
        theme={themeStorage ? 'light' : 'dark'}
      />
      <MyRoutes />
    </ThemeProvider>
  );
}

export default App;
