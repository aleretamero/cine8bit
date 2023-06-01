import MyRoutes from './routes';

// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app">
      <ToastContainer autoClose={3000} theme="dark" />
      <MyRoutes />
    </div>
  );
}

export default App;
