import { createContext } from "react";

import { productsList } from "../main";

export const CartProductContext = createContext();

export function CartProductProvider({ children }) {

  return (
    <CartProductContext.Provider value={productsList}>
      {children}
    </CartProductContext.Provider>
  )
}