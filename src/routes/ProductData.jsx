import { useParams } from "react-router-dom"
import { productsList } from "../main";
import { AddToCart } from "../components/home/AddToCart";
import { AddToFavorites } from "../components/home/AddToFavorites";

export function ProductData() {
  const { id } = useParams();
  
  const products = productsList.find((product) => product.id.toString() === id);
  
  //console.log(productsList, 'hola')
  const images = [{
    src: "https://imgs.search.brave.com/BfGpBiL-Zgpppl7eLZ-WABrWp-XOYA2f2KEKUteGWek/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1jZG4uaHlwYi5z/dC9odHRwczovL2h5/cGViZWFzdC5jb20v/aW1hZ2UvMjAyMi8w/Ni9qYXNtaW5lLWpv/cmRhbi1haXItam9y/ZGFuLTEtZ3JlZW4t/Y3JvYy1wZS1waWN0/dXJlcy0xLmpwZz9j/YnI9MSZxPTkw",
  }]

  return (
    <div className="ml-[300px] my-32 w-full flex items-center justify-center">
      <div className="dark:bg-[#252525] bg-white w-[1100px] h-[650px] rounded-xl shadow-xl flex gap-10 ">
        <div className="ml-4 flex items-center">
          <img 
          className="rounded-xl h-[600px] w-auto"
          src="https://imgs.search.brave.com/BfGpBiL-Zgpppl7eLZ-WABrWp-XOYA2f2KEKUteGWek/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1jZG4uaHlwYi5z/dC9odHRwczovL2h5/cGViZWFzdC5jb20v/aW1hZ2UvMjAyMi8w/Ni9qYXNtaW5lLWpv/cmRhbi1haXItam9y/ZGFuLTEtZ3JlZW4t/Y3JvYy1wZS1waWN0/dXJlcy0xLmpwZz9j/YnI9MSZxPTkw" alt={products.title} />
        </div>
        <div className="flex flex-col justify-center mr-4 gap-4">
          <h1 className="text-4xl font-bold dark:text-white">{products.title}</h1>
          <span className="text-[80px] font-semibold dark:text-white">$ {products.price}</span>
          <p className="font-semibold dark:text-white">{products.description}</p>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
              images.map((image) => (
                <>
                <img className="rounded-xl h-24 w-auto" src={image.src} alt={image.title} key={image.src} />
                <img className="rounded-xl h-24 w-auto" src={image.src} alt={image.title} key={image.src} />
                <img className="rounded-xl h-24 w-auto" src={image.src} alt={image.title} key={image.src} />
                </>
              ))
            }
          </section>
          <div className="flex items-center gap-4 mt-6">
            <AddToCart />
            <AddToFavorites />
          </div>
        </div>
      </div>
    </div>
  )
}