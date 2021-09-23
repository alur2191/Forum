import React, {useState} from 'react'
import api from '../../api/api'
import {addPost} from '../../actions/post' 


export default function AddPost() {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    
    const handleSubmit = async (e) => {
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
        <div>
            <form action="">
                <div>
                    <input value={title} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <textarea value={body} type="text" placeholder="Body" onChange={(e) => setBody(e.target.value)}/>
                </div>
                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="btn btn-primary"
                    >
                    Post
                </button>
            </form>
        </div>
    )
}
