import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {getCurrentUser} from '../../actions/profile' 

const User =({getCurrentUser,profile}) => {
    useEffect(()=>{
        getCurrentUser()
    },[])
    
    return (
        <div>
            <h2>{profile.user_name}</h2>
        </div>
    )
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth,
    profile: state.profile.profile
});

export default connect(mapStateToProps, { getCurrentUser })(User);