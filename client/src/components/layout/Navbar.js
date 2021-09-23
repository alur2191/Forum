import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div className="nav">
            <span className="logo">Forum</span>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-post">Post</Link></li>
            </ul>
        </div>
    )
}
