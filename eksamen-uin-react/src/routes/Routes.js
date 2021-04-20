import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "../pages/Home.js";
import NoMatch from "../pages/NoMatch.js";
import Contact from '../pages/Contact.js';
import Galleri from '../pages/Galleri.js';
import About from '../pages/About.js';
import SinglePost from '../pages/SinglePost.js';
import Artikkelside from '../pages/Artikkelside.js';



const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

        <Route exact path="/artikkelside">
        <Artikkelside />
        </Route>

            <Route exact path="/kontakt">
                <Contact />
            </Route>

            <Route exact path="/omOss">
                <About />
            </Route>

            <Route exact path="/galleri">
                <Galleri />
            </Route>

            <Route path="/post/:slug">
                <SinglePost />
            </Route>

            <Route path="*">
                <NoMatch />
            </Route>


        </Switch>
    </Router>
);

export default Routes;