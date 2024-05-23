import { useState } from "react"

export function useFilters() {
  const [filter, setFilter] = useState({
    minPrice: 0,
    category: 'all'
  })

  const filterProducts = (products) => {
    const filteredProducts = products.filter((product) => {
      return (
      product.price >= filter.minPrice &&
      filter.category === 'all' ||
      product.category === filter.category
      )
    }
  )
  return filteredProducts
}
 return { setFilter, filterProducts}
}