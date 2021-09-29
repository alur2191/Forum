import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {register} from '../../actions/auth' 


const Register = ({register}) => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: ""
    });
    
    const { username,email, password } = inputs;

    const onChange = e =>
        setInputs({ ...inputs, [e.target.name]: e.target.value });

    const onSubmitForm = e => {
        e.preventDefault();
        register(username,email,password)
    };

    return (
        <div className="login">
            <h6>
                Sign Up
            </h6>
            <form className="form" onSubmit={onSubmitForm}>
            <div className="form-group">
                    <input
                        type="username"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
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
                    <input type="submit" value="Submit" />
                </div>
            </form>
            
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth
});

export default connect(mapStateToProps, { register })(Register);