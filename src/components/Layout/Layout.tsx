import { Outlet } from 'react-router-dom'
import BottomNavigation from '../Navigation/bottomNavigation/BottomNavigation'
import Sidebar from '../Navigation/sidebar/Sidebar'

const Layout = () => {
    return (
        <div>
            <div className="div">
                <Sidebar />
            </div>
            <div className="div">
                <BottomNavigation />
            </div>
            <div className="div">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
