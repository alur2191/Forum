import { combineReducers } from 'redux'
import post from './post'
import auth from './auth'
import profile from './profile'
import category from './category'

export default combineReducers({
    post,
    auth,
    profile,
    category
})