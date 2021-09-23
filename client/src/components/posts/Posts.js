import React, {Fragment,useEffect} from 'react';
import api from '../../api/api'
import { connect } from 'react-redux'
import { getPosts } from '../../actions/post';
import Post from './Post'

const Posts = ({ getPosts, post: { posts } }) => {
    useEffect(()=> {
        const fetchData = async () => {
            try {
                const res = await api.get("/posts")
                console.log(res.data.data.posts);
                getPosts(res.data.data.posts);
            }catch(err){
                console.log(err);
            }
        }
        fetchData()
    },[])
    return (
        <Fragment>
            <div >
                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);