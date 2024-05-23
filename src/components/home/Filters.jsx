import { useId, useState } from "react"

export function Filters({setFilter}) {
  const [minPrice, setMinPrice] = useState(0)

  const minPriceId = useId()
  const categoryId = useId()

  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value)
    setFilter(preState => ({
      ...preState,
      minPrice: e.target.value
    }))
}

  const handleChangeCategory = (e) => {
    setFilter(preState => ({
      ...preState,
      category: e.target.value
    }))
  }

  return (
    <section className="ml-6 mt-8 flex items-center gap-10">

      <div className="flex min-w-[275px] items-center gap-4 bg-white dark:bg-[#252525] px-4 py-2 rounded-xl shadow-xl">
        <label 
        className="font-semibold text-zinc-500"
        htmlFor={minPriceId}>Price</label>
        <input type="range"
        id={minPriceId}
        min='0'
        max='2000'
        onChange={handleChangeMinPrice}
        />
        <span className="dark:text-white">$ {minPrice}</span>
      </div>


      <div className="flex items-center gap-4 bg-white dark:bg-[#252525] px-4 py-2 rounded-xl shadow-xl">
        <label 
        className="font-semibold text-zinc-500"
        htmlFor={categoryId}>Category</label>
        <select className="focus:outline-none bg-transparent dark:text-white" onChange={handleChangeCategory} id={categoryId}>
          <option className="font-semibold rounded-xl" value="all">All</option>
          <option className="font-semibold" value="home-decoration">Home Decoration</option>
          <option className="font-semibold" value="groceries">Groceries</option>
          <option className="font-semibold" value="smartphones">Smartphones</option>
          <option className="font-semibold" value="laptops">Laptops</option>
          <option className="font-semibold" value="accessories">Accessories</option>
          <option className="font-semibold" value="fragrances">Fragrances</option>
        </select>
      </div>
    </section>
  )
}