import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "../pages/home";
import Articles from "../pages/articles";
import NoMatch from "../pages/NoMatch";
import Article from '../pages/article';
import Contact from '../pages/contact';
import Galleri from '../pages/galleri';

const Routes = () => {
    <Router>
        <Switch>
            <Route exact path="/hjem">
                <Home/>
            </Route>
            <Route exact path="/artikler">
                <Articles/>
            </Route>
            <Route exact path="/artikkel">
                <Article/>
            </Route>
            <Route exact path="/kontakt">
                <Contact/>
            </Route>
            <Route exact path="/galleri">
                <Galleri/>
            </Route>
            <Route path="*">
                <NoMatch/>
            </Route>
        </Switch>
    </Router>
}

export default Routes;

