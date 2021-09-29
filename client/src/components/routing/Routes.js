import {Fragment} from 'react'
import { Switch,Route } from 'react-router';
import AddPost from '../post/AddPost'
import Post from "../post/Post"
import User from '../user/User'

const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/add-post" component={AddPost} />
                <Route exact path="/posts/:id" component={Post} />
                <Route exact path="/user/me" component={User} />
            {/* <Route component={NotFound} /> */}
            </Switch>
        </Fragment>
    );
};
    
export default Routes;