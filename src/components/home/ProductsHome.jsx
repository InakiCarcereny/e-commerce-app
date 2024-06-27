import { Link } from "react-router-dom";
import { HeartFillIcon } from "../../icons/HeartFillIcon";
import { StarIcon } from "../../icons/StarIcon";
import { AddToCart } from "./AddToCart";
import { AddToFavorites } from "./AddToFavorites";

export function ProductsHome({products}) {

  return (
      products.slice(0, 4).map((product) => (
        <li 
        className="bg-white dark:bg-[#252525] shadow-xl px-4 py-2 rounded-xl flex flex-col items-center gap-4 cursor-pointer duration-300"
        key={product.id}>
          <Link className="flex flex-col items-center gap-4" to={`/${product.id}`}>
            <span className="font-semibold dark:text-white text-xl">{product.title}</span>

            <img className="rounded-xl" src={product.thumbnail} alt={product.title} />

            <div className="flex items-center dark:text-white font-bold gap-8">
              <p>{product.price} $</p>
              <div className="flex items-center dark:text-white font-bold gap-2">
                <p>{product.rating}</p>
                <StarIcon />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <AddToCart />
              <AddToFavorites />
            </div> 
          </Link>
        </li>
      )
    )
  )
}