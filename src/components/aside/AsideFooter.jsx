import { useState } from "react"
import { useToggleTheme } from "../../hooks/useToggleTheme"
import { MoonIcon } from "../../icons/MoonIcon"
import { SunIcon } from "../../icons/SunIcon"

export function AsideFooter() {
  const { toggleTheme } = useToggleTheme()
  const [icon, setIcon] = useState(false)

  const changeIcon = icon ? <SunIcon /> : <MoonIcon /> 

  const changeTheme = () => {
    toggleTheme()
    setIcon(!icon)
  }

  return (
    <footer className="flex flex-col gap-6 px-4 py-8">

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/user.jpg" alt="" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col justify-center gap-1">
            <span className="font-semibold text-lg dark:text-white">Inaki</span>
            <p className="font-semibold text-sm dark:text-white">Loged In</p>
          </div>
        </div>
        <div>
          <button className="flex items-center gap-2 rounded-full p-1 hover:bg-zinc-600" 
          onClick={changeTheme}
          >
            {changeIcon}
          </button>
        </div>
      </div>

    </footer>
  )
}