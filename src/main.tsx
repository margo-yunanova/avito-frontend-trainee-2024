import './index.css';

import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from './App.tsx';
import {
  AdvertisementsPage,
  loader as advertisementsLoader,
} from './pages/AdvertisementsPage/AdvertisementsPage.tsx';
import { ErrorPage } from './pages/ErrorPage/ErrorPage.tsx';
import { OrdersPage } from './pages/OrdersPage/OrdersPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/advertisements',
        element: <AdvertisementsPage />,
        loader: advertisementsLoader,
      },
      {
        path: '/orders',
        element: <OrdersPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
