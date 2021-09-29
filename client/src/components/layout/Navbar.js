import React from 'react'
import {Link} from 'react-router-dom'
import { Globe, Search } from 'react-feather';

export default function Header() {
    return (
        
        <div className="nav">
            <div className="container">
                <Link className="logo" to="/" style={{display:'flex', alignItems:'center'}}><Globe style={{marginRight:5}}/>Forum</Link>
                <ul style={{display:'flex', alignItems:'center'}}>
                    <li><Search style={{width: 15}}/></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/add-post">Post</Link></li>
                    <li>
                        <Link to='/user/me'>me</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
