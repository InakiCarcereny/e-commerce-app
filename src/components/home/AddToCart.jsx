import { AddToCartIcon } from "../../icons/AddToCartIcon";

export function AddToCart() {

  return (
    <button className="bg-lime-300 font-semibold px-4 py-2 rounded-full cursor-pointer flex items-center gap-2">
      <span className="font-bold text-black dark:text-white">Add to cart</span>
      <AddToCartIcon />
    </button>
  )
}