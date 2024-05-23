import { AddToCartIcon } from "../../icons/AddToCartIcon";

export function AddToCart() {

  return (
    <button className="bg-lime-300 text-black font-semibold px-4 py-2 rounded-xl cursor-pointer flex items-center gap-2">
      <span className="font-bold dark:text-white">Add to cart</span>
      <AddToCartIcon />
    </button>
  )
}