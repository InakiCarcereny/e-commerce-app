import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from '../src/routes/Home'
import { Favorites } from './routes/Favorites'
import { ErrorPage } from './routes/ErrorPage'
import { Account } from './routes/Account'
import { Layout } from './routes/Layout'
import { ProductData } from './routes/ProductData'
import  products  from "./mocks/products.json";
import { FiltersProvider } from './context/filters'
import { Products } from './routes/Products'

export const productsList = products.products;

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
        path: '/:id',
        element: <ProductData />
      },
      {
        path: '/favorites',
        element: <Favorites />
      },
      {
        path: '/account',
        element: <Account />
      },
      {
        path: '/products',
        element: <Products />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <RouterProvider router={router} />
  </FiltersProvider>
)
