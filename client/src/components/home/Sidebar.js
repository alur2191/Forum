import React from 'react'
import { connect } from 'react-redux';
import Login from '../auth/Login'
import Register from '../auth/Register'
import PopularPosts from '../popular/PopularPosts'
import PropTypes from 'prop-types';

const Sidebar = ({isAuthenticated}) => {
    
    return (
        <div  className="sidebar">
            {isAuthenticated ? null: <Login />}
            <PopularPosts/>
        </div>
    )
}

Sidebar.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Sidebar);