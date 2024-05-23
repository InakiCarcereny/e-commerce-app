import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from '../src/routes/Home'
import { Favorites } from './routes/Favorites'
import { ErrorPage } from './routes/ErrorPage'
import { Account } from './routes/Account'
import { Layout } from './routes/Layout'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/favorites',
        element: <Favorites />
      },
      {
        path: '/account',
        element: <Account />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
