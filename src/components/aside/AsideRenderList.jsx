import { NavLink } from "react-router-dom";

export function RenderList({ name, path, icon, id }) {

  return (
      <li className="flex flex-col gap-4 hover:scale-105 transition-all duration-300 mx-4"
      key={id}
      >
        <NavLink to={path} className={({isActive}) => isActive ? 'bg-lime-300 rounded-xl py-2 px-2' : ''}>
          <div className="flex items-center gap-2 text-lg">
            {icon}
            <span className="font-semibold dark:text-white">{name}</span>
          </div>
        </NavLink>
      </li>
  )
}