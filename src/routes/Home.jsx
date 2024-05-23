import { HeaderHome } from "../components/home/HeaderHome";
import { ProductsHome } from "../components/home/ProductsHome";
import { Filters } from "../components/home/Filters";

import  products  from "../mocks/products.json";
import { useFilters } from "../hooks/useFilters";

export function Home() {
  const { setFilter, filterProducts } = useFilters();

  const productsList = products.products;
  const filteredsProducts = filterProducts(productsList)

  return (
    <div className="flex flex-col w-full">
      <HeaderHome />
      <Filters setFilter={setFilter} />
      <main className="flex flex-col gap-4 mx-6 mt-4">
        <span className="font-semibold text-4xl text-black dark:text-white">Products</span>
        <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <ProductsHome products={filteredsProducts} />
        </ul>
      </main>
    </div>
  )
}