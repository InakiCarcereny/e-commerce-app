import { Link } from "react-router-dom";
import { HeartFillIcon } from "../../icons/HeartFillIcon";
import { StarIcon } from "../../icons/StarIcon";
import { AddToCart } from "../../components/home/AddToCart";
import { AddToFavorites } from "../../components/home/AddToFavorites";

export function OurProducts({products}) {

  return (
      products.map((product) => (
        <li 
        className="bg-white dark:bg-[#252525] shadow-xl px-4 py-2 rounded-xl flex flex-col items-center gap-4 cursor-pointer duration-300"
        key={product.id}>
          <Link className="flex flex-col items-center gap-4" to={`/${product.id}`}>
            <span className="font-semibold dark:text-white text-xl">{product.title}</span>

            <img className="rounded-xl" src="https://imgs.search.brave.com/BfGpBiL-Zgpppl7eLZ-WABrWp-XOYA2f2KEKUteGWek/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1jZG4uaHlwYi5z/dC9odHRwczovL2h5/cGViZWFzdC5jb20v/aW1hZ2UvMjAyMi8w/Ni9qYXNtaW5lLWpv/cmRhbi1haXItam9y/ZGFuLTEtZ3JlZW4t/Y3JvYy1wZS1waWN0/dXJlcy0xLmpwZz9j/YnI9MSZxPTkw" alt={product.title} />

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