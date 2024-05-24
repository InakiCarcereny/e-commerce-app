import { HeartIcon } from "../../icons/HeartIcon";

export function AddToFavorites() {

  return (
    <button className="bg-white font-semibold px-4 py-2 rounded-full cursor-pointer flex items-center gap-2">
      <span className="font-bold dark:text-lime-300">Add to favorites</span>
      <HeartIcon />
    </button>
  )
}