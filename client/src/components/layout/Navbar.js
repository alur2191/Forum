import React,{ Fragment } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Globe, Search } from 'react-feather';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth'



const Navbar = ({ auth: { isAuthenticated }, logout }) => {
    const guestLinks = (
        <ul style={{display:'flex', alignItems:'center'}}>
            <li><Search style={{width: 15}}/></li>
            <li><Link to="/">Home</Link></li>
        </ul>
    )
    
    const userLinks = (
        <ul style={{display:'flex', alignItems:'center'}}>
            <li><Search style={{width: 15}}/></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-post">Post</Link></li>
            <li>
                <Link to='/u/me'>Profile</Link>
            </li>
            <li><a onClick={logout} href="#!">Sign out</a></li>
        </ul>
    )
    return (
        
        <div className="nav">
            <div className="container">
                <Link className="logo" to="/" style={{display:'flex', alignItems:'center'}}><Globe style={{marginRight:5}}/>Forum</Link>
                <Fragment>
                    {isAuthenticated ? userLinks : guestLinks}
                </Fragment>
            </div>
        </div>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);