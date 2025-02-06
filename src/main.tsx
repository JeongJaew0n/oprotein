import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.tsx';

const bootstrap = async () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    return;
  }

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

bootstrap();