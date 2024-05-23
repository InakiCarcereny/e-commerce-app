import { MoonIcon } from "../../icons/MoonIcon"

export function AsideFooter() {

  return (
    <footer className="flex flex-col gap-6 px-4 py-8 bg-lime-300 rounded-tl-3xl rounded-tr-3xl">
      <div className="flex items-center gap-4">
        <img src="/user.jpg" alt="" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col justify-center gap-1">
          <span className="font-semibold text-lg dark:text-white">Inaki</span>
          <p className="font-semibold text-sm dark:text-white">Loged In</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2">
          <MoonIcon />
          <span className="font-semibold dark:text-white">Dark Mode</span>
        </span>
        
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" checked />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>

      </div>
    </footer>
  )
}