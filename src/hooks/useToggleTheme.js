import { useEffect, useState } from "react";

export function useToggleTheme () {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return { toggleTheme}
}