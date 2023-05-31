import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/sass/reset.scss';
import './assets/sass/globals.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
