import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "../pages/Hjem.js";
import NoMatch from "../pages/NoMatch.js";
import Contact from '../pages/Contact.js';
import Galleri from '../pages/Galleri.js';
import About from '../pages/About.js';
import SinglePost from '../pages/SinglePost.js';


import NavigasjonAlle from '../components/artikkelpages/NavigasjonAlle.js';
import NavigasjonHelse from '../components/artikkelpages/NavigasjonHelse.js';
import NavigasjonInspirasjon from '../components/artikkelpages/NavigasjonInspirasjon.js';
import NavigasjonNyheter from '../components/artikkelpages/NavigasjonNyheter.js';
import NavigasjonProfflag from '../components/artikkelpages/NavigasjonProfflag.js';
import NavigasjonTipsogtricks from '../components/artikkelpages/NavigasjonTipsogtricks.js';
import NavigasjonTutorials from '../components/artikkelpages/NavigasjonTutorials.js';




const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/NavigasjonAlle">
            <NavigasjonAlle />
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

            <Route exact path="/NavigasjonAlle">
            <NavigasjonAlle />
            </Route>

            <Route exact path="/NavigasjonHelse">
            <NavigasjonHelse />
            </Route>

            <Route exact path="/NavigasjonInspirasjon">
            <NavigasjonInspirasjon />
            </Route>

            <Route exact path="/NavigasjonNyheter">
            <NavigasjonNyheter />
            </Route>

            <Route exact path="/NavigasjonProfflag">
            <NavigasjonProfflag />
            </Route>

            <Route exact path="/NavigasjonTipsogtricks">
            <NavigasjonTipsogtricks />
            </Route>

            <Route exact path="/NavigasjonTutorials">
            <NavigasjonTutorials />
            </Route>
            
            <Route path="*">
                <NoMatch />
            </Route>
        </Switch>
    </Router>
);

export default Routes;