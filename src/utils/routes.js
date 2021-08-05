import { History } from '../pages/History'
import { Home } from '../pages/Home'
import { Menu } from '../pages/Menu'
import { Settings } from '../pages/Settings'

export const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
        icon: <i className="fas fa-home"></i>
    },
    {
        path: '/menu',
        name: 'Menu',
        component: Menu,
        icon: <i className="fas fa-concierge-bell"></i>
    },
    {
        path: '/history',
        name: 'History',
        component: History,
        icon: <i className="far fa-clock"></i>
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
        icon: <i className="fas fa-cog"></i>
    },
]