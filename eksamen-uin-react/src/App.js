import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Hovedside from "./components/Hovedside";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";



function App() {
  return (
<BrowserRouter>

<NavBar />

<Switch>

<Route component={Hovedside} path='/' exact />
<Route component={About} path='/about' />
<Route component={SinglePost} path='/post/:slug' />
<Route component={Gallery} path='/gallery' />
<Route component={Contact} path='/contact' />

</Switch>
</BrowserRouter>

  );
}

export default App;
