import React, { Fragment, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./Main.css"

import Home from "./components/home/Home"
import Nav from "./components/layout/Navbar"
import Routes from "./components/routing/Routes"

import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";


// Redux
import { Provider } from 'react-redux'
import store from './store'

toast.configure();

const App = () => {
      const checkAuthenticated = async () => {
      try {
      const res = await fetch("http://localhost:3003/api/auth/verify", {
          method: "POST",
          headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();

      // parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
      } catch (err) {
        console.error(err.message);
      }
    };

    useEffect(() => {
        checkAuthenticated();
    }, []);

    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    // const setAuth = boolean => {
    //     setIsAuthenticated(boolean);
    // };

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
