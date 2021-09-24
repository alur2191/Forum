import React from 'react'
import {Link} from 'react-router-dom'
export default function Login() {
    return (
        <div className="login">
            <h6>
                Sign In
            </h6>
            <form className="form" >
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
                        <Link to="/">Don't have an account?</Link>
                    </span>
                    <input type="submit" value="Login" />
                </div>
            </form>
            
        </div>
    )
}
