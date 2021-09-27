import React from 'react'
import {Link} from 'react-router-dom'
export default function Login() {
    return (
        <div className="login">
            <h6>
                Sign Up
            </h6>
            <form className="form" >
            <div className="form-group">
                    <input
                        type="username"
                        placeholder="Username"
                        name="username"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                    />
                </div>
                <div style={{ display:'flex', alignItems:'center', gap: 10, justifyContent:'flex-end'}}>
                    <span>
                        <Link to="/">Sign in.</Link>
                    </span>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            
        </div>
    )
}
