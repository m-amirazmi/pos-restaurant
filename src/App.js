import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { routes } from './utils/routes'

export const App = () => {

    const renderRoutes = () => routes.map((route) => <Route exact path={route.path} component={route.component} />)

    return (
        <BrowserRouter>
            <Switch>
                {renderRoutes()}
                <Redirect from="*" to="/menu" />
            </Switch>
        </BrowserRouter>
    )
}
