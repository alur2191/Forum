import {Fragment} from 'react'
import { Switch,Route } from 'react-router';
import AddPost from '../posts/AddPost'
import EditPost from "../posts/EditPost"
import Post from "../post/Post"

const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/add-post" component={AddPost} />
                <Route exact path="/posts/:id" component={Post} />
                <Route exact path="/posts/:id/edit" component={EditPost} />

            {/* <Route component={NotFound} /> */}
            </Switch>
        </Fragment>
    );
};
    
export default Routes;