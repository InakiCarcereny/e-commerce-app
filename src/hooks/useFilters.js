import { useContext } from "react"
import { FiltersContext } from "../context/filters.jsx"

export function useFilters() {
  const { filter, setFilter } = useContext(FiltersContext);

  const filterProducts = (products) => {
    const filteredProducts = products.filter((product) => {
      return (
      product.price >= filter.minPrice &&
      (filter.category === 'all' ||
      product.category === filter.category)
      )
    }
  )
  return filteredProducts
}
 return { filterProducts, setFilter }
}