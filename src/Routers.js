import React  from 'react';
import { Router , Route , hashHistory , IndexRoute } from 'react-router';

import App from "./App";
import Home from "./Home";
import About from "./About";
import Works from "./Works";
import Blogs from "./Blogs";
import Work from "./components/Work";

class Routers extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/works' component={Works}/>
          <Route path='/blogs' component={Blogs}/>
          <Route path='/work/:title' component={Work}/>
        </Route>
      </Router>
    )
  }
}

export default Routers;
