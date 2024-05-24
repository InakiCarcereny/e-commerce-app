import { useParams } from "react-router-dom"
import { productsList } from "../main";

export function ProductData() {
  const { id } = useParams();
  
  const products = productsList.find((product) => product.id.toString() === id);
  
  //console.log(productsList, 'hola')

  return (
    <div className="ml-[300px] my-32 w-full flex items-center justify-center">
      <div className="bg-[#252525] w-6/12 h-[500px] rounded-xl shadow-xl flex items-center">
        <div>
          <img 
          className="rounded-xl"
          src="https://imgs.search.brave.com/BfGpBiL-Zgpppl7eLZ-WABrWp-XOYA2f2KEKUteGWek/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1jZG4uaHlwYi5z/dC9odHRwczovL2h5/cGViZWFzdC5jb20v/aW1hZ2UvMjAyMi8w/Ni9qYXNtaW5lLWpv/cmRhbi1haXItam9y/ZGFuLTEtZ3JlZW4t/Y3JvYy1wZS1waWN0/dXJlcy0xLmpwZz9j/YnI9MSZxPTkw" alt={products.title} />
        </div>
        <div className="flex flex-col gap-4 ml-4">
          <h3 className="font-semibold text-2xl dark:text-white">{products.title}</h3>
          <span className="text-lg dark:text-white">{products.description}</span>
          <div className="flex gap-4 items-center">
            <span className="text-sm dark:text-white">{products.price}</span>
            <span className="text-sm dark:text-white">{products.rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}