import { useContext } from "react";
import { CartProductContext } from "../context/cartProduct";

export function useCartProducts () {
  const context = useContext(CartProductContext)

  if (context === undefined) {
    throw new Error("useCartProducts must be used within a CartProductProvider")
  }

  return (
    context
  )

}