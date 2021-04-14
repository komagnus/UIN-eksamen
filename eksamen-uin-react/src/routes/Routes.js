import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "../pages/home.js";
import Articles from "../pages/articles.js";
import NoMatch from "../pages/NoMatch.js";
import Article from '../pages/article.js';
import Contact from '../pages/contact.js';
import Galleri from '../pages/galleri.js';
import About from '../pages/about.js';


const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/artikler">
                <Articles />
            </Route>
            <Route exact path="/artikkel">
                <Article />
            </Route>
            <Route exact path="/kontakt">
                <Contact />
            </Route>
            <Route exact path="/OmOss">
                <About />
            </Route>
            <Route exact path="/galleri">
                <Galleri />
            </Route>
            <Route path="*">
                <NoMatch />
            </Route>
        </Switch>
    </Router>
);

export default Routes;

