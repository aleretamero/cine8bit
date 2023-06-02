import { GlobalStyle } from './global/styles/Global';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './global/styles/Theme';

import MyRoutes from './routes';

// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <ToastContainer autoClose={3000} theme="dark" />
      <MyRoutes />
    </ThemeProvider>
  );
}

export default App;
