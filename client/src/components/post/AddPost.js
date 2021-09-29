import React, {useState,Fragment} from 'react'
import api from '../../utils/api'
import {addPost} from '../../actions/post' 
import Description from '../category/Description'
import { Bold, Italic, Link as LinkIcon, Code} from 'react-feather';

export default function AddPost() {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const response = await api.post("/posts/", {
                title,
                body,
                user_id: 1,
                category_id: 1,
                created_at: '2021-09-11 01:07:30.815655'
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
