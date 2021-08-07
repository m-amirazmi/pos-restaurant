import React from 'react'
import styles from '../assets/scss/components/MainLayout.module.scss'
import { routes } from '../utils/routes'
import { Link, useLocation } from 'react-router-dom'

export const MainLayout = ({ children }) => {

    const { pathname } = useLocation()

    const renderSidebar = () => {


        const links = routes.map((route) => {

            const active = pathname.includes(route.path) && styles.active

            return (
                <div key={route.path} className={`${styles.link} ${active}`}>
                    <Link to={route.path} key={route.path} className="text-center text-decoration-none">
                        <div className="fs-3">
                            {route.icon}
                        </div>
                        <p className="m-0">{route.name}</p>
                    </Link>
                </div>
            )
        }
        )

        return (
            <div className={`${styles.sidebar} d-flex flex-column justify-content-center`}>
                <div className={`${styles.brand} text-center`}>
                    <h3>TR</h3>
                </div>
                <div className={`${styles.links}`}>
                    {links}
                </div>
                <div className={styles.logout}>
                    <div className="fs-3">
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                    <p className="m-0 text-uppercase">Logout</p>
                </div>
            </div>
        )
    }

    const renderContent = () => {
        return (
            <div className={`${styles.main}`}>
                {children}
            </div>
        )
    }

    return (
        <div style={{ overflow: 'hidden' }}>
            {renderSidebar()}
            {renderContent()}
        </div>
    )
}
