import { useCartProducts } from "../hooks/useCartProducts";
import { useCart } from "../hooks/useCart";

function CartItem ({ name, price, image, id, quantity, addToCart }) {

  return (
    <>
    <h1>{price}</h1>
    <img src={image} alt={name} />
    <p>{name}</p>
    <button onClick={() => addToCart()}>Add to cart</button>
    </>
  )
}

export function Cart () {
  const { productsList } = useCartProducts()
  const { cart, cleanCart, addToCart } = useCart()

  return (
    <div className="flex flex-col gap-6 ml-[300px]">
      <span className="font-normal text-4xl text-black dark:text-white px-4 py-2">
        Cart
      </span>
      {
        cart.map((product) => (
          <CartItem 
          addToCart={() => addToCart(product)}
          key={product.id}
          {...product}
           />
        ))
      }
    </div>
  )
}