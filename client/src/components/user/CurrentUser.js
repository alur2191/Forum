import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {getCurrentUser} from '../../actions/profile' 

const CurrentUser =({getCurrentUser,loading, profile}) => {
    useEffect(()=>{
        getCurrentUser()
        
    },[])
    
    return (
        <div>
            <span>test</span> 
            <h2>{loading===null ? <span>Loading</span> : profile.user_name}</h2>
        </div>
    )
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth,
    profile: state.profile.profile
});

export default connect(mapStateToProps, { getCurrentUser })(CurrentUser);