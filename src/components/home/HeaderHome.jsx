import { SearchIcon } from "../../icons/SearchIcon";
import { CartIcon } from "../../icons/CartIcon";

export function HeaderHome() {

  return (
    <header className="h-8 flex items-center justify-between my-4 mx-6">
    <div>
      <h3 className="font-semibold text-2xl dark:text-white">Welcome to E-Commerce</h3>
      <span className="font-semibold text-zinc-500">Hello Inaki, welcome back!</span>
    </div>
    <div className="flex items-center gap-32">
      <div className="bg-white dark:bg-[#252525] px-4 py-2 rounded-xl flex items-center gap-4 shadow-xl">
        <input type='search'
        className="bg-transparent w-[400px] text-black dark:text-white font-semibold focus:outline-none"
        />
        <SearchIcon />
       </div>
       <span className="bg-white dark:bg-[#252525] px-1 py-1 shadow-xl rounded-full hover:scale-110 duration-300 ease-in-out cursor-pointer">
        <CartIcon />
       </span>
    </div>
  </header>
  )
}