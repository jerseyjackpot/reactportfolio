import React from 'react';
import About from './about.js';
import Headnav from './header-navbar.js';
import Footer from './footer.js';
import Portfolio from './portfolio.js';
import Contact from './contact.js';
import Homepage from './homepage.js';
import { HashRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (

    <Router>
      <div className="everything-except-footer">
      <Headnav />
      <Switch>
        <Route exact path ="/">
          <Homepage />
        </Route>
       <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/portfolio">
          <Portfolio />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

      </Switch>
      </div>
      <Footer />
    </Router>

  );
}
export default App;