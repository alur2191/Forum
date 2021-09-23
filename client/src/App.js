import React, { Fragment} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./components/home/Home"
import Nav from "./components/layout/Navbar"
import Routes from "./components/routing/Routes"

import "./Main.css"

// Redux
import { Provider } from 'react-redux'
import store from './store'

const App = () => (
    <Provider store={store}>
      <Router>
        <Nav />
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home}  />
            <Route component={Routes} />
          
          </Switch>
        </Fragment>
      </Router>
    </Provider>
)

export default App;
