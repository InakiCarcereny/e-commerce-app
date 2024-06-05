import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const newCart = [...cart, product]
    setCart(newCart)
  }

  const removeFromCart = (product) => {
    const newCart = cart.filter(p => p.id !== product.id)
    setCart(newCart)
  }


  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart, 
      removeFromCart, 
      addToCart, 
      clearCart}}>
      {children}
    </CartContext.Provider>
  )
}