import { HeaderHome } from "../components/home/HeaderHome";
import { ProductsHome } from "../components/home/ProductsHome";
import { Filters } from "../components/home/Filters";
import { productsList } from "../main";
import { useFilters } from "../hooks/useFilters";

export function Home() {
  const { setFilter, filterProducts } = useFilters();
  const filteredsProducts = filterProducts(productsList)

  return (
    <div className="flex flex-col ml-[300px] w-full">
      <HeaderHome />
      <Filters setFilter={setFilter} />
      <main className="flex flex-col gap-4 mx-6 mt-16">
        <span className="font-normal text-4xl text-black dark:text-white">Products</span>
        <ul className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <ProductsHome products={filteredsProducts} />
        </ul>
      </main>
    </div>
  )
}