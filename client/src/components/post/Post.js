import React, {useEffect,Fragment} from 'react'
import { useParams, Link} from "react-router-dom";
import { connect } from 'react-redux'
import { getPost } from '../../actions/post';
import Description from '../category/Description'
import { ArrowUp,ArrowDown } from 'react-feather';

import api from '../../api/api'

const Post = ({ getPost, post: { post,loading  } }) => {
    const { id } = useParams();
    useEffect(()=> {
        const fetchData = async () => {
            try {
                const res = await api.get(`/posts/${id}`)
                getPost(res.data.data.posts)
            }catch(err){
                console.log(err);
            }
        }
        fetchData()
    },[id])
    return loading || post === null ? (
        <span>LOADING</span>
    ) : (
        <Fragment>
            <div className="main-body" style={{display:'grid', gridTemplateColumns:'40px 1fr', gridGap:'10px'}}>
                
                <div style={{backgroundColor:'#f0f2ff', display: 'flex', flexDirection:'column', alignItems:'center', paddingTop:8}}>
                    
                    <ArrowUp/>
                    •
                    <ArrowDown/>
                </div>
                <div>
                    <div style={{fontSize:'0.9rem', color:'#4c4d52'}}>Posted by testUser • 4 hours ago</div>
                        <h3><Link to={`/posts/${id}`}>{post.title}</Link></h3>
                        <p>{post.body}</p>
                        <div>
                            <a>Comments</a>
                            <a>Share</a>
                            <a>Save</a>
                        </div>
                </div>
            </div>
            <div  className="sidebar"><Description/></div>
        </Fragment>
    )
}


const mapStateToProps = (state) => ({
    post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);