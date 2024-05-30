import { Filters } from "../components/home/Filters";
import { OurProducts } from "../components/products/OurProducts";
import { useFilters } from "../hooks/useFilters";
import { productsList } from "../main";

export function Products() {
  const { filterProducts } = useFilters();
  const filteredsProducts = filterProducts(productsList)

  return (
    <section className="flex flex-col gap-6 ml-[300px]">
      <span className="font-normal text-4xl text-black dark:text-white px-4 py-2">
        Our products
      </span>

      <Filters />

      <main className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mx-6 my-4">
        <OurProducts products={filteredsProducts} />
      </main>
    </section>
  )
}