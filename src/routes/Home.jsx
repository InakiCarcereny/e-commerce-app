import { HeaderHome } from "../components/home/HeaderHome";
import { ProductsHome } from "../components/home/ProductsHome";
import { productsList } from "../main";
import { useFilters } from "../hooks/useFilters";
import { ArrowRight } from "../icons/ArrowRight";
import { Link } from "react-router-dom";

export function Home() {
  const { filterProducts } = useFilters();
  const filteredsProducts = filterProducts(productsList)

  return (
        <div className="flex flex-col ml-[300px] w-full">
          <HeaderHome />
          <section className="flex flex-col gap-4 mx-6 mt-10">
            <span className="font-normal text-4xl text-black dark:text-white flex items-center gap-6">
              Products
              <Link to="/products">
                <ArrowRight />  
              </Link>
            </span>
            <ul className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              <ProductsHome products={filteredsProducts} />
            </ul>
            <span className="font-normal text-4xl text-black dark:text-white mt-4 flex items-center gap-6">
              Favorites (Coming Soon)
              <Link to="/favorites">
                <ArrowRight />
              </Link>
            </span>
          </section>
        </div>
  )
}