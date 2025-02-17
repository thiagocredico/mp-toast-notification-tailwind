import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ToastProvider from './components/ToastProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>,
);
