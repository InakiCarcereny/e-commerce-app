import { RenderList } from '../components/RenderList';
import { AsideFooter } from '../components/AsideFooter';

import { ShoppingCartIcon } from "../icons/ShoppingCartIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { HeartIcon } from "../icons/HeartIcon";
import { UserIcon } from "../icons/UserIcon";


export function AsideMenu() {
  const data = [
    {
      id: 1,
      name: "Home",
      path: "/",
      icon: <HomeIcon />
    },
    {
      id: 2,
      name: "Search",
      path: "/search",
      icon: <SearchIcon />
    },
    {
      id: 3,
      name: "Favorites",
      path: "/favorites",
      icon: <HeartIcon />
    },
    {
      id: 4,
      name: "Account",
      path: "/account",
      icon: <UserIcon />
    }
  ]

  return (
    <aside className='flex flex-col justify-between w-[300px] bg-white h-screen'>
      <div>
        <header className="flex items-center justify-center gap-2 pt-4">
          <ShoppingCartIcon />
          <h1 className="font-semibold text-2xl">E-Commerce</h1>
        </header>

        <nav className="ml-4 mt-8 flex flex-col gap-4">
          <span className="font-medium text-lg">Menu</span>
          <ul className="flex flex-col gap-4">
            {
              data.map(({ name, path, icon, id }) => (
                <RenderList 
                key={id} 
                name={name} 
                path={path} 
                icon={icon} />
              )
            )}
          </ul>
        </nav>
      </div>
      
      <AsideFooter />
    </aside>
  )
}