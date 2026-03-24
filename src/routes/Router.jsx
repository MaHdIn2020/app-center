import React from 'react';
import { createBrowserRouter } from "react-router";

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Apps from '../pages/Apps';
import AppDetails from '../pages/AppDetails';
import Installation from '../pages/Installation';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/apps",
        element: <Apps />
      },
      {
        path: "/app/:id",
        element: <AppDetails />
      },
      {
        path: "/installation",
        element: <Installation />
      }
    ]
  },
]);

export default router;