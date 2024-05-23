import { Outlet } from 'react-router-dom'
import { AsideMenu } from '../components/aside/AsideMenu'

export function Layout () {

  return (
    <div className='flex' >
    <AsideMenu />
    <Outlet />
  </div >
  )
}