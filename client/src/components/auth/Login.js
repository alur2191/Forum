import React, {useState} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {signIn} from '../../actions/auth' 


const Login = ({signIn}) => {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });
    
    const { email, password } = inputs;

    const onChange = e =>
        setInputs({ ...inputs, [e.target.name]: e.target.value });

    const onSubmitForm = e => {
        e.preventDefault();
        
        signIn(email,password)
    };

    return (
        <div className="login">
            <h6>
                Sign In
            </h6>
            <form onSubmit={onSubmitForm}>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
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

const mapStateToProps = state => ({
    isAuthenticated: state.auth
});

export default connect(mapStateToProps, { signIn })(Login);