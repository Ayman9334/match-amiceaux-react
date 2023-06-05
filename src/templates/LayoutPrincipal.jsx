import { Outlet } from 'react-router-dom'
import NavigationBar from '../comps/NavigationBar'
import PiedPage from '../comps/PiedPage'


const LayoutPrincipal = () => {
  
  return (
    <>
        {/* <Preloader /> */}
        <NavigationBar />
        <Outlet />
        <PiedPage />
    </>
  )
}

export default LayoutPrincipal
