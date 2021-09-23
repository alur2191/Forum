import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
export default function Login() {
    return (
        <Fragment>
            <p>
                Sign In
            </p>
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
                <input type="submit" value="Login" />
            </form>
            <p>
                <Link to="/">Sign Up</Link>
            </p>
        </Fragment>
    )
}
