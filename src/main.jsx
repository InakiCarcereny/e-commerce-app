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
import { CartProductProvider } from './context/cartProduct'
import { CartProvider } from './context/cart'
import { Products } from './routes/Products'
import { Cart } from './routes/Cart'

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
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <CartProductProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </CartProductProvider>
  </FiltersProvider>
)
