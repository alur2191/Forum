import { Switch,Route } from 'react-router';
import AddPost from '../posts/AddPost'
import EditPost from "../posts/EditPost"
import Post from "../posts/Post"

const Routes = () => {
    return (
        <section className="container">
            <Switch>
                <Route exact path="/add-post" component={AddPost} />
                <Route exact path="/posts/:id" component={Post} />
                <Route exact path="/posts/:id/edit" component={EditPost} />

            {/* <Route component={NotFound} /> */}
            </Switch>
        </section>
    );
};
    
export default Routes;