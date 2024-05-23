import { HeartIcon } from "../../icons/HeartIcon";

export function AddToFavorites() {

  return (
    <button className="flex items-center gap-2">
      <span className="font-bold dark:text-white">Add to favorites</span>
      <HeartIcon />
    </button>
  )
}