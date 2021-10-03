import {Fragment} from 'react'
import { Switch,Route } from 'react-router';
import AddPost from '../post/AddPost'
import Post from "../post/Post"
import User from '../user/User'
import CurrentUser from '../user/CurrentUser'

const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/add-post" component={AddPost} />
                <Route exact path="/posts/:id" component={Post} />
                <Route exact path="/u/me" component={CurrentUser} />
                <Route exact path="/u/:username" component={User} />
                
                {/* <Route component={NotFound} /> */}
            </Switch>
        </Fragment>
    );
};
    
export default Routes;