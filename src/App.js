import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { routes } from './utils/routes'
import { CartProvider } from './contexts/CartContext'

export const App = () => {

    const renderRoutes = () => routes.map((route) => <Route key={route.path} exact path={route.path} component={route.component} />)

    return (
        <BrowserRouter>
            <CartProvider>
                <Switch>
                    {renderRoutes()}
                    <Redirect from="*" to="/menu" />
                </Switch>
            </CartProvider>
        </BrowserRouter>
    )
}
