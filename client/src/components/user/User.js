import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {getUser} from '../../actions/profile' 

const User =({getUser,loading, profile}) => {
    useEffect(()=>{
        getUser('Dandan')
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

export default connect(mapStateToProps, { getUser })(User);