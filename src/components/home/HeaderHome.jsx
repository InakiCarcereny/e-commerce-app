import { CartIcon } from "../../icons/CartIcon";

export function HeaderHome() {

  return (
    <header className="h-8 flex items-center justify-between my-4 mx-6">
    <div>
      <h3 className="font-semibold text-2xl dark:text-white duration-300">Welcome to E-Commerce</h3>
      <span className="font-semibold text-zinc-500">Hello Inaki, welcome back!</span>
    </div>
    <div className="flex items-center">
      <span className="bg-white dark:bg-[#252525] px-1 py-1 shadow-xl rounded-full hover:scale-110 duration-300 ease-in-out cursor-pointer">
        <CartIcon />
      </span>
    </div>
  </header>
  )
}