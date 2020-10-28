import React from 'react';
import About from './about.js';
import Headnav from './header-navbar.js';
import Footer from './footer.js';
import Portfolio from './portfolio.js';
import Contact from './contact.js';
import Animation from './animation.js';
import { HashRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (

    <Router>
      <Headnav />
        <Switch>
          <Route exact path="/animation" component={Animation}>
            <Animation />
          </Route>
         
          <Route exact path="/about" component={About}>
            <About />
          </Route>

          <Route exact path="/portfolio" component={Portfolio}>
            <Portfolio />
          </Route>

          <Route exact path="/contact" component={Contact}>
            <Contact />
          </Route>

          </Switch>
        <Footer />
     </Router>

  );
}
export default App;