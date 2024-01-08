import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Ark, Inquirenear, LandingPage, Orocan, Busify } from './pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { inject } from '@vercel/analytics';
import { ScrollToTop } from './components'

inject();
const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/Ark',
    element: <Ark />,
  },
  {
    path: '/Orocan',
    element: <Orocan />,
  },
  {
    path: '/InquireNear',
    element: <Inquirenear />,
  },
  {
    path: '/Busify',
    element: <Busify />,
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  </React.StrictMode>,
);