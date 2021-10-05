import React, { Fragment, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./Main.css"

import Home from "./components/home/Home"
import Nav from "./components/layout/Navbar"
import Routes from "./components/routing/Routes"

import setAuthToken from './utils/setAuthToken'
import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";
import { loadUser } from './actions/auth';


// Redux
import { Provider } from 'react-redux'
import store from './store'

toast.configure();

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(()=>{
    

    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
        if (!localStorage.token) store.dispatch({ type: 'LOGOUT' });
      });
    },[])

    return(
      <Provider store={store}>
        <Router>
          <Nav />
          <Fragment>
            <div className="container layout">
            <Switch>
              
                <Route exact path="/" component={Home}  />
                <Route component={Routes} />
              
            </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    )
  }

export default App;
