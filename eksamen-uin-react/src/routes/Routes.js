import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "../pages/home";
import Articles from "../pages/articles";
import NoMatch from "../pages/NoMatch";

const Routes = () => {
    <Router>
        <Switch>
            <Route exact path="/hjem">
                <Home/>
            </Route>
            <Route exact path="/artikler">
                <Articles/>
            </Route>
            <Route path="*">
                <NoMatch/>
            </Route>
        </Switch>
    </Router>
}

export default Routes;