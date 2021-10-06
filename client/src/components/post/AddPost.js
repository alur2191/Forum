import React, {useState,useEffect,Fragment} from 'react'
import {connect} from 'react-redux'
import {addPost} from '../../actions/post' 
import Description from '../category/Description'
import { Bold, Italic, Link as LinkIcon, Code} from 'react-feather';
import {getCategories} from '../../actions/category' 
import {getCurrentUser} from '../../actions/profile' 

const AddPost = ({addPost,getCategories,getCurrentUser,profile, category:{categories}}) => {

    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [category,setCategory] = useState('')

    useEffect(()=>{
        getCategories()
        getCurrentUser()
    },[])

    

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(title,body,category,profile.user_name,profile.user_id);
        addPost(title,body,category,profile.user_name,profile.user_id);
    };

    const handleChange = (e) => {
        setCategory(e.target.value);
    }
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
                    <select value={category}  onChange={handleChange}>
                        {categories.map((category) => {
                            return <option key={category.id} value={category.name}>{category.name}</option>;
                        })}
                    </select>
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
    profile: state.profile.profile,
    category: state.category
});

export default connect(mapStateToProps, { getCurrentUser,getCategories,addPost })(AddPost);