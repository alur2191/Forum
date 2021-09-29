import { combineReducers } from 'redux'
import post from './post'
import auth from './auth'
import profile from './profile'

export default combineReducers({
    post,
    auth,
    profile
})