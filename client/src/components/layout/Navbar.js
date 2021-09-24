import React from 'react'
import {Link} from 'react-router-dom'
import { Globe } from 'react-feather';

export default function Header() {
    return (
        
        <div className="nav">
            <div style={{display:'flex', alignItems:'center'}}><Globe style={{marginRight:5}}/><span className="logo">Forum</span></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-post">Post</Link></li>
            </ul>
        </div>
    )
}
