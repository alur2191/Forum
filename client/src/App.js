import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./routes/home/Home"
import EditPost from "./routes/posts/EditPost"
import Posts from "./routes/posts/Posts"
import "./Main.css"

const App = () => {
  return <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}  />
        <Route exact path="/posts/:id" component={Posts} />
        <Route exact path="/posts/:id/edit" component={EditPost} />
      </Switch>
    </Router>
  </div>
};

export default App;
