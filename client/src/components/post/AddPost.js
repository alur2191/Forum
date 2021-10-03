import React, {useState,useEffect,Fragment} from 'react'
import api from '../../utils/api'
import {connect} from 'react-redux'
import {addPost} from '../../actions/post' 
import Description from '../category/Description'
import { Bold, Italic, Link as LinkIcon, Code} from 'react-feather';
import {getCurrentUser} from '../../actions/profile' 

const AddPost = ({getCurrentUser,profile}) => {
    useEffect(()=>{
        getCurrentUser()
    },[])

    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/posts/", {
                title,
                body,
                category_id: 1,
                author: profile.user_id
            });
            addPost(response.data.data.post);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <Fragment>
        <div > 
            <div className="main-body">
                <h2>{profile.user_name}</h2>
                <form className="add-post" action="">
                    <div>
                        <input value={title} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <textarea value={body} type="text" placeholder="Body" onChange={(e) => setBody(e.target.value)}/>
                        <div className="textarea-buttons">
                            <div>
                                <Bold />
                                <Italic />
                                <LinkIcon />
                                <Code />
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'flex-end'}}><button
                        onClick={onSubmit}
                        type="submit"
                        className="btn btn-primary"
                        style={{width:80}}
                        >
                        Post
                    </button></div>
                </form>
            </div>
        </div>
        <div  className="sidebar"><Description/></div>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth,
    profile: state.profile.profile
});

export default connect(mapStateToProps, { getCurrentUser })(AddPost);